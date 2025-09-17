// import HeroSection from "../../components/HeroSection/HeroSection";
// import SearchCar from "./components/SearchCar";
// import AdvanceFilter from "./components/AdvanceFilter";
// import CarList from "./components/CarList";

// export default function CarListing(){
//      const herodata={
//     heading:(<>Local Deals, Global {<br/>}
//               Access All Cars in a {<br/>}
//               Single Network</>),
//     subHeading :(<>Browse certified inventories, engage with {<br/>} licensed dealers, or manage import requests {<br/>}all streamlined for you.</>),
//     url :"url('/Hero_images/carListing1.jpg')"
//      }

//     return (
//         <>
//         <HeroSection {...herodata}/>
//         <SearchCar/>
//         <AdvanceFilter/>
//       <CarList/>
       
//         </>
//     )
// }



import { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchCar from "./components/SearchCar";
import AdvanceFilter from "./components/AdvanceFilter";
import CarList from "./components/CarList";


export default function CarListing() {
  const herodata = {
    heading: (
      <>
        Local Deals, Global <br />
        Access All Cars in a <br />
        Single Network
      </>
    ),
    subHeading: (
      <>
        Browse certified inventories, engage with <br />
        licensed dealers, or manage import requests <br />
        all streamlined for you.
      </>
    ),
    url: "url('/Hero_images/carListing1.jpg')",
  };

  // ✅ Shared filters state (used by both SearchCar & AdvanceFilter)
  const [filters, setFilters] = useState({
    searchText: "",
    carType: "",
    make: "",
    model: "",
    year: "",
    budget: 300000,
    brandFilters: [],
  });

  return (
    <>
      <HeroSection {...herodata} />

      {/* 🔍 SearchCar controls filters */}
      <SearchCar filters={filters} setFilters={setFilters} />

      {/* 🎯 AdvanceFilter applies filters to API cars */}
      <AdvanceFilter filters={filters} setFilters={setFilters} />

      {/* 🚗 CarList (optional: show after AdvanceFilter) */}
      <CarList />
    </>
  );
}
