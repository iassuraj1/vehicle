
// export const carFilterByMake = (cars) => {
//   const grouped = {};

//   cars.forEach((car) => {
//     const make = car.brand || car.make || car.name?.split(" ")[0] || "Unknown";

//     if (!grouped[make]) grouped[make] = [];

//     grouped[make].push({
//       id: car.id,
//       name: car.name,
//       // price: car.price,
//         price: car.sspprice,

//         images: car.images && car.images.length > 0 
//                 ? car.images 
//                 : car.image 
//                   ? [car.image] 
//                   : [], 
//       model: car.model || "",
//       year: car.year || "",
//     });
//   });

//   return grouped; 
// };



export const carFilterByMake = (cars) => {
  const grouped = {};

  cars.forEach((car) => {
    const make = car.brand || car.make || car.name?.split(" ")[0] || "Unknown";

    if (!grouped[make]) grouped[make] = [];

    grouped[make].push({
      id: car.id || car._id,
      name: car.name,
      sspprice: car.sspprice,   // ✅ keep SSP
      usdprice: car.usdprice,   // ✅ keep USD
      images: car.images && car.images.length > 0 
              ? car.images 
              : car.image 
                ? [car.image] 
                : [], 
      model: car.model || "",
      year: car.year || "",
      brand: car.brand || "",
      kmDriven: car.kmDriven || "",
      city: car.city || "",
      state: car.state || "",
      title: car.title || car.name,
    });
  });

  return grouped; 
};

