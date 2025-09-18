// utils/carFilterByMake.js
export const carFilterByMake = (cars) => {
  const grouped = {};

  cars.forEach((car) => {
    const make = car.brand || car.make || car.name?.split(" ")[0] || "Unknown";

    if (!grouped[make]) grouped[make] = [];

    grouped[make].push({
      id: car.id,
      name: car.name,
      price: car.price,
      // image: car.images?.[0] || car.image || "",
        images: car.images && car.images.length > 0 
                ? car.images 
                : car.image 
                  ? [car.image] 
                  : [], 
      model: car.model || "",
      year: car.year || "",
    });
  });
  console.log("all grouped cars",grouped)
  return grouped; // ✅ plain JSON object
};


