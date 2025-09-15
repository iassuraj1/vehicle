import React, { useMemo, useState } from "react";
import Mercedes from "../../../assets/BuyCar/Mercedes.jpg"
import toyota from "../../../assets/BuyCar/toyota.png"
import { FaSearch } from "react-icons/fa";
import "./BuyCarPage.css";

/**
 * Mock car dataset. Replace img fields with real URLs if you have thumbnails.
 * Prices are numeric (used for sorting). condition is "New" or "Old".
 */
const CARS = [
  {
    id: 1,
    name: "Toyota Hilux",
    brand: "Toyota",
    condition: "New",
    type: "SUV", 
    fuel: "Diesel",
    rating: 4.4,
    price: 48000,
    img : toyota
  },
  {
    id: 2,
    name: "Mercedes-Benz GLE",
    brand: "Mercedes-Benz",
    condition: "New",
    type: "SUV",
    fuel: "Diesel",
    rating: 4.1,
    price: 130000,
    img : Mercedes
  },
  {
    id: 3,
    name: "Toyota Fortuner",
    brand: "Toyota",
    condition: "Old",
    type: "SUV",
    fuel: "Petrol",
    rating: 4.1,
    price: 125000,
    img: Mercedes
  },
  {
    id: 4,
    name: "Nissan Patrol",
    brand: "Nissan",
    condition: "New",
    type: "SUV",
    fuel: "Petrol",
    rating: 4.2,
    price: 90000,
    img:  Mercedes
  },
  {
    id: 5,
    name: "Suzuki Swift",
    brand: "Suzuki",
    condition: "Old",
    type: "Hatchback",
    fuel: "Petrol",
    rating: 3.9,
    price: 15000,
  },
];

const uniqueValues = (arr, key) =>
  Array.from(new Set(arr.map((i) => i[key]))).sort();

/** Small inline SVG used as placeholder "car image" */
const CarSVG = ({ label = "Car", variant = 0 }) => {
  // Several subtle gradients for visual variety
  const stops = [
    ["#e9f0fb", "#ffffff"],
    ["#f3f6f8", "#ffffff"],
    ["#eef6f9", "#ffffff"],
    ["#fff7ef", "#ffffff"],
  ];
  const [c1, c2] = stops[variant % stops.length];
  return (
    <svg
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
      className="buycar-svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`g${variant}`} x1="0" x2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g${variant})`} />
      <g transform="translate(16,34) scale(0.94)">
        <rect
          x="0"
          y="10"
          width="760"
          height="220"
          rx="8"
          fill="#ffffff"
          stroke="#d0d8e8"
        />
        <text x="24" y="72" fontSize="34" fill="#9fb8d6" fontWeight="700">
          {label}
        </text>
      </g>
    </svg>
  );
};

export default function BuyCarPage() {
  // UI state
  const [condition, setCondition] = useState("New"); // New | Old
  const [expanded, setExpanded] = useState({
    budget: true,
    brand: true,
    vehicle: false,
    fuel: false,
    transmission: false,
    features: false,
  });
  const [filters, setFilters] = useState({
    brand: [], 
    vehicle: [],
    fuel: [], 
  });
  const [brandSearch, setBrandSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured"); // featured | low | high | rating

  // derive available filter items from dataset (counts reflect full dataset but in UI we show counts)
  const brands = useMemo(() => uniqueValues(CARS, "brand"), []);
  const vehicles = useMemo(() => uniqueValues(CARS, "type"), []);
  const fuels = useMemo(() => uniqueValues(CARS, "fuel"), []);

  // toggle expand/collapse section
  const toggleExpand = (key) =>
    setExpanded((p) => ({ ...p, [key]: !p[key] }));

  // toggle a checkbox filter
  const toggleFilter = (group, value) =>
    setFilters((p) => {
      const exists = p[group].includes(value);
      return {
        ...p,
        [group]: exists ? p[group].filter((v) => v !== value) : [...p[group], value],
      };
    });

  // remove a filter chip (same as toggle)
  const removeChip = (group, val) => {
    if (group === "condition") {
      setCondition("New");
      return;
    }
    toggleFilter(group, val);
  };

  // clear all filters and reset condition
  const clearAll = () => {
    setFilters({ brand: [], vehicle: [], fuel: [] });
    setCondition("New");
    setBrandSearch("");
    setSortBy("featured");
  };

  // filtered + sorted cars
  const filteredCars = useMemo(() => {
    let out = CARS.filter((c) => c.condition === condition);

    if (filters.brand.length) out = out.filter((c) => filters.brand.includes(c.brand));
    if (filters.vehicle.length) out = out.filter((c) => filters.vehicle.includes(c.type));
    if (filters.fuel.length) out = out.filter((c) => filters.fuel.includes(c.fuel));

    // Sorting
    if (sortBy === "low") out = out.slice().sort((a, b) => a.price - b.price);
    else if (sortBy === "high") out = out.slice().sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") out = out.slice().sort((a, b) => b.rating - a.rating);
    // featured -> keep original order

    return out;
  }, [condition, filters, sortBy]);

  // filtered brand list by search term (sidebar)
  const visibleBrands = brands.filter((b) =>
    b.toLowerCase().includes(brandSearch.trim().toLowerCase())
  );

  // chips representing active filters
  const chips = [
    { group: "condition", label: `${condition} Car` },
    ...filters.brand.map((b) => ({ group: "brand", label: b })),
    ...filters.vehicle.map((v) => ({ group: "vehicle", label: v })),
    ...filters.fuel.map((f) => ({ group: "fuel", label: f })),
  ];

  return (
    <div className="buycar-page-wrap">
      <div className="buycar-wrap" role="main" aria-label="Buy Car page">
        {/* Sidebar */}
        <aside className="buycar-sidebar" aria-label="Filters">
          <div className="buycar-section">
            <div className="buycar-section-title">Condition</div>
            <div className="buycar-condition-btns">
              <button
                className={`buycar-pill ${condition === "New" ? "buycar-pill--active" : ""}`}
                onClick={() => setCondition("New")}
              >
                NEW CAR
              </button>
              <button
                className={`buycar-pill ${condition === "Old" ? "buycar-pill--active" : ""}`}
                onClick={() => setCondition("Old")}
              >
                OLD CAR
              </button>
            </div>
          </div>

          <div className="buycar-filter">
            <h4 onClick={() => toggleExpand("budget")}>
              <span>Budget</span>
              <span className="buycar-toggle-icon">{expanded.budget ? "–" : "+"}</span>
            </h4>
            {expanded.budget && (
              <div style={{ marginTop: 8 }}>
                <div className="buycar-range-legend">SSP 300,000 — SSP 15,000,000</div>
                <input className="buycar-range" type="range" min="0" max="100" defaultValue="40" />
                <div style={{ marginTop: 10, fontSize: 13, color: "#6b7b8c" }}>
                  Or select from ranges below
                </div>
                <div className="buycar-checkbox-group" style={{ marginTop: 8 }}>
                  <label className="buycar-checkbox">
                    <input type="checkbox"  /> 7.85L - 15.7L SSP (3)
                  </label>
                  <label className="buycar-checkbox">
                    <input type="checkbox" /> 15.7L - 23.5L SSP (4)
                  </label>
                  <label className="buycar-checkbox">
                    <input type="checkbox"  /> 23.5L - 31.4L SSP (6)
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* BRAND */}
          <div className="buycar-filter">
            <h4 onClick={() => toggleExpand("brand")}>
              <span>Brand</span>
              <span className="buycar-toggle-icon">{expanded.brand ? "–" : "+"}</span>
            </h4>
            {expanded.brand && (
              <>
                <div className="buycar-brand-search">
                  <input
                    aria-label="Search brands"
                    placeholder="Search Brands..."
                    value={brandSearch}
                    onChange={(e) => setBrandSearch(e.target.value)}
                  />
                  <button
                    title="clear"
                    onClick={() => setBrandSearch("")}
                    className="buycar-brand-clear"
                  >
                    <FaSearch  />
                    
                  </button>
                </div>

                <div className="buycar-checkbox-group" style={{ marginTop: 8 }}>
                  {visibleBrands.map((b) => (
                    <label className="buycar-checkbox" key={b}>
                      <input
                        type="checkbox"
                        checked={filters.brand.includes(b)}
                        onChange={() => toggleFilter("brand", b)}
                      />
                      <span style={{ marginLeft: 8 }}>
                        {b} <small style={{ color: "#6b7b8c" }}>({CARS.filter(c => c.brand===b).length})</small>
                      </span>
                    </label>
                  ))}
                  {visibleBrands.length === 0 && <div className="buycar-muted">No brands found</div>}
                </div>
              </>
            )}
          </div>

          {/* VEHICLE TYPE */}
          <div className="buycar-filter">
            <h4 onClick={() => toggleExpand("vehicle")}>
              <span>Vehicle Type</span>
              <span className="buycar-toggle-icon">{expanded.vehicle ? "–" : "+"}</span>
            </h4>
            {expanded.vehicle && (
              <div className="buycar-checkbox-group" style={{ marginTop: 8 }}>
                {vehicles.map((v) => (
                  <label className="buycar-checkbox" key={v}>
                    <input
                      type="checkbox"
                      checked={filters.vehicle.includes(v)}
                      onChange={() => toggleFilter("vehicle", v)}
                    />
                    <span style={{ marginLeft: 8 }}>
                      {v} <small style={{ color: "#6b7b8c" }}>({CARS.filter(c => c.type===v).length})</small>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* FUEL */}
          <div className="buycar-filter">
            <h4 onClick={() => toggleExpand("fuel")}>
              <span>Fuel Type</span>
              <span className="buycar-toggle-icon">{expanded.fuel ? "–" : "+"}</span>
            </h4>
            {expanded.fuel && (
              <div className="buycar-checkbox-group" style={{ marginTop: 8 }}>
                {fuels.map((f) => (
                  <label className="buycar-checkbox" key={f}>
                    <input
                      type="checkbox"
                      checked={filters.fuel.includes(f)}
                      onChange={() => toggleFilter("fuel", f)}
                    />
                    <span style={{ marginLeft: 8 }}>
                      {f} <small style={{ color: "#6b7b8c" }}>({CARS.filter(c => c.fuel===f).length})</small>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

         {/* Transmission */}
            <div className="buycar-filter">
                <h4 onClick={() => toggleExpand("transmission")}>
                    <span>Transmission</span>
                    <span className="buycar-toggle-icon">
                    {expanded.transmission ? "–" : "+"}
                    </span>
                </h4>
                {expanded.transmission && (
                    <div className="buycar-checkbox-group">
                    <label><input type="checkbox" /> Automatic</label>
                    <label><input type="checkbox" /> Manual</label>
                    </div>
                )}
            </div>

            {/* Features */}
            <div className="buycar-filter">
                <h4 onClick={() => toggleExpand("features")}>
                    <span>Features</span>
                    <span className="buycar-toggle-icon">
                    {expanded.features ? "–" : "+"}
                    </span>
                </h4>
                {expanded.features && (
                    <div className="buycar-checkbox-group">
                    <label><input type="checkbox" /> Sunroof</label>
                    <label><input type="checkbox" /> Bluetooth</label>
                    <label><input type="checkbox" /> Navigation</label>
                    </div>
                )}
            </div>

             {/* Mileage */}
            <div className="buycar-filter">
                <h4 onClick={() => toggleExpand("mileage")}>
                    <span>Mileage</span>
                    <span className="buycar-toggle-icon">
                    {expanded.mileage ? "–" : "+"}
                    </span>
                </h4>
                {expanded.mileage && (
                    <div className="buycar-checkbox-group">
                    <label><input type="checkbox" /> 0–10 km/l</label>
                    <label><input type="checkbox" /> 10–15 km/l</label>
                    <label><input type="checkbox" /> 15+ km/l</label>
                    </div>
                )}
            </div>

            {/* Seats */}
            <div className="buycar-filter">
                <h4 onClick={() => toggleExpand("seats")}>
                    <span>Seats</span>
                    <span className="buycar-toggle-icon">
                    {expanded.seats ? "–" : "+"}
                    </span>
                </h4>
                {expanded.seats && (
                    <div className="buycar-checkbox-group">
                    <label><input type="checkbox" /> 5 Seater</label>
                    <label><input type="checkbox" /> 7 Seater</label>
                    </div>
                )}
            </div>

            {/* Airbags */}
             <div className="buycar-filter">
                <h4 onClick={() => toggleExpand("airbags")}>
                    <span>Airbags</span>
                    <span className="buycar-toggle-icon">
                    {expanded.airbags ? "–" : "+"}
                    </span>
                </h4>
                {expanded.airbags && (
                    <div className="buycar-checkbox-group">
                    <label><input type="checkbox" /> 2 Airbags</label>
                    <label><input type="checkbox" /> 6 Airbags</label>
                    </div>
                )}
            </div>

             {/* Cylinders */}
             <div className="buycar-filter">
                <h4 onClick={() => toggleExpand("cylinders")}>
                    <span>Cylinders</span>
                    <span className="buycar-toggle-icon">
                    {expanded.cylinders ? "–" : "+"}
                    </span>
                </h4>
                {expanded.cylinders && (
                    <div className="buycar-checkbox-group">
                    <label><input type="checkbox" /> 3 Cylinder</label>
                    <label><input type="checkbox" /> 4 Cylinder</label>
                    <label><input type="checkbox" /> 6 Cylinder</label>
                    </div>
                )}
            </div>

            {/* Wheel Drive */}
            <div className="buycar-filter">
                <h4 onClick={() => toggleExpand("wheelDrive")}>
                    <span>Wheel Drive</span>
                    <span className="buycar-toggle-icon">
                    {expanded.wheelDrive ? "–" : "+"}
                    </span>
                </h4>
                {expanded.wheelDrive && (
                    <div className="buycar-checkbox-group">
                    <label><input type="checkbox" /> 2WD</label>
                    <label><input type="checkbox" /> 4WD</label>
                    </div>
                )}
            </div>
        </aside>

        {/* Content */}
        <section className="buycar-content">
          <div className="buycar-results-header" aria-live="polite">
            <div className="buycar-results-left">
              <h2 className="buycar-results-title">Search Results</h2>

              <div className="buycar-chips">
                {chips.map((c, idx) => (
                  <button
                    key={`${c.group}-${c.label}-${idx}`}
                    className="buycar-chip"
                    onClick={() =>
                      c.group === "condition"
                        ? removeChip("condition")
                        : removeChip(c.group, c.label)
                    }
                    title={`Remove ${c.label}`}
                  >
                    {c.label} <span className="buycar-chip-x">X</span>
                  </button>
                ))}
                <button className="buycar-chip buycar-chip-clear" onClick={clearAll}>
                  Clear All Filters
                </button>
              </div>
            </div>

            <div className="buycar-sort-wrap">
              <label htmlFor="sort" className="buycar-sort-label">Sort By</label>
              <select
                id="sort"
                className="buycar-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          <div className="buycar-list">
            {filteredCars.map((car, i) => (
              <article className="buycar-card" key={car.id} aria-label={car.name}>
                <div className="buycar-card-img">
                    {car.img ? (
                        <img src={car.img} alt={car.name} className="buycar-img" />
                    ) : (
                        <CarSVG label={car.name} variant={i} />
                    )}
                </div>

                <div className="buycar-card-body">
                  <div >
                    <h3 className="buycar-card-title">{car.name}</h3>
                    <div className="buycar-rating"> {car.rating} ★ | {Math.round(car.rating * 40)} Reviews</div>
                  </div>

                  <div className="buycar-price">
                    {formatPriceRange(car.price)}  <span className="on_road">* Get on-road Price</span> <small className="ex-showroom">*Ex-Showroom Price</small>
                  </div>

                  <div className="buycar-meta">
                    <div>12 km/l</div>
                    <div>2,755 cc</div>
                    <div>7 Seater</div>
                  </div>

                  <div className="buycar-cta">
                    <button className="buycar-btn-primary">VIEW DETAILS</button>
                    {/* <div className="buycar-price-badge">{Math.round(car.rating * 40)} Reviews</div> */}
                  </div>
                </div>
              </article>
            ))}

            {filteredCars.length === 0 && (
              <div className="buycar-empty">No cars match your filters.</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

/* small helper to show price range like "45K - 50K SSP" based on number */
function formatPriceRange(value) {
  // For mock: show value near 'value' or 'value-5%'
  const low = Math.round(value * 0.95 / 1000) * 1; // in thousands simplification
  const high = Math.round(value * 1.05 / 1000) * 1;
  // convert to K if appropriate
  if (value >= 1000) {
    return `${Math.round(low)}K - ${Math.round(high)}K SSP`;
  }
  return `${value} SSP`;
}
