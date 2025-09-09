import "./CategoryTabs.css";

const categories = ["SUVs", "Sedan", "Hatchback", "MUV", "Luxury"];

const CategoryTabs = ({ active, onSelect }) => {
  return (
    <div className="category-tabs">
      {categories.map(cat => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
 