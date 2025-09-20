
export const carFilterByMake = (cars) => {
  const grouped = {};

  cars.forEach((car) => {
    const make = car.brand || car.make || car.name?.split(" ")[0] || "Unknown";

    if (!grouped[make]) grouped[make] = [];

    grouped[make].push({
      id: car.id,
      name: car.name,
      price: car.price,
        images: car.images && car.images.length > 0 
                ? car.images 
                : car.image 
                  ? [car.image] 
                  : [], 
      model: car.model || "",
      year: car.year || "",
    });
  });

  return grouped; 
};


