// import { useEffect } from "react";

// export default function Language() {
//   useEffect(() => {
//     // Define init function before script loads
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "en,es,fr,de,zh",
//           autoDisplay: false,
//         },
//         "google_translate_element"
//       );
//     };

//     // Load Google Translate script
//     const script = document.createElement("script");
//     script.src =
//       "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);

//     // Cleanup script on unmount
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div style={{ textAlign: "center", margin: "20px 0" }}>
//       <h3>🌍 Select Language</h3>
//       <div id="google_translate_element"></div>
//     </div>
//   );
// }



// It is correct also
  

// import React, { useEffect } from "react";

// const Language = () => {
//   useEffect(() => {
//     // Add Google Translate script only once
//     if (!document.querySelector("#google-translate-script")) {
//       const script = document.createElement("script");
//       script.id = "google-translate-script";
//       script.src =
//         "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.async = true;
//       document.body.appendChild(script);
//     }

//     // Define init function globally
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           autoDisplay: false,
//         },
//         "google_translate_element"
//       );
//     };
//   }, []);

//   return <div id="google_translate_element"></div>;
// };

// export default Language;


// Third Way 

// import React, { useEffect } from "react";

// const Language = () => {
//   useEffect(() => {
//     if (!document.querySelector("#google-translate-script")) {
//       const script = document.createElement("script");
//       script.id = "google-translate-script";
//       script.src =
//         "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.async = true;
//       document.body.appendChild(script);
//     }

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           autoDisplay: false,
//         },
//         "google_translate_element"
//       );
//     };
//   }, []);

//   // 📌 Only render the container
//   return <div id="google_translate_element"></div>;
// };

// export default Language;



import React, { useEffect, useState } from "react";
import "./Language.css";

const Language = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Load Google Translate script
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const handleChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);

    // Google Translate dropdown hidden select
    const googleFrame = document.querySelector(".goog-te-combo");
    if (googleFrame) {
      googleFrame.value = lang;
      googleFrame.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="lang-wrapper">
      <select
        value={language}
        onChange={handleChange}
        className="lang-dropdown"
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="zh-CN">Chinese</option>
        
      </select>

      {/* Hidden Google Translate container */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default Language;

