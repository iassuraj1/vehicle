
import React, { useMemo, useState ,useContext} from "react";
import toyota from "../../../assets/BuyCar/toyota.png";
import { FaSearch } from "react-icons/fa";
import "./BuyCarPage.css";
// import { getCars } from "../../../services/carService"; // fetch cars from backend
import useCars from "../../../services/useCars";

import ViewDetails from "../../../components/ViewCarDetails"; // import your view car details component
import { CurrencyContext } from "../../../components/CurrencyContext";




const uniqueValues = (arr, key) =>
  Array.from(new Set(arr.map((i) => i[key]))).sort();

const CarSVG = ({ label = "Car", variant = 0 }) => {
  const stops = [
    ["#e9f0fb", "#ffffff"],
    ["#f3f6f8", "#ffffff"],
    ["#eef6f9", "#ffffff"],
    ["#fff7ef", "#ffffff"],
  ];
  const [c1, c2] = stops[variant % stops.length];
  return (
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className="buycar-svg" aria-hidden="true">
      <defs>
        <linearGradient id={`g${variant}`} x1="0" x2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g${variant})`} />
      <g transform="translate(16,34) scale(0.94)">
        <rect x="0" y="10" width="760" height="220" rx="8" fill="#ffffff" stroke="#d0d8e8" />
        <text x="24" y="72" fontSize="34" fill="#9fb8d6" fontWeight="700">
          {label}
        </text>
      </g>
    </svg>
  );
};

export default function BuyCarPage() {
  const {cars, loading,error}= useCars()
  // const updatedCars = myCars[0]

  const { currency } = useContext(CurrencyContext);


  const [condition, setCondition] = useState("");
  const [expanded, setExpanded] = useState({
    budget: true,
    brand: true,
    vehicle: false,
    fuel: false,
    transmission: false,
    features: false,
  });
  const [filters, setFilters] = useState({ brand: [], vehicle: [], fuel: [] ,budget: null, budgetRange: null});
  const [brandSearch, setBrandSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // New: popup state
  const [selectedCar, setSelectedCar] = useState(null);








const CARS = cars.map((c, index) => ({
  id: c.id || index + 1,
  name: c.name || c.title || "Unknown",
  brand: c.brand || c.make || "Unknown",
  condition: c.condition || "Used",
  type: c.bodyType || "Sedan",
  fuel: c.fuelType || "Petrol",
  rating: 4.0,
  sspprice: c.sspprice || 0,
  usdprice: c.usdprice || 0,
  images: c.images?.length ? c.images : [toyota],
  model: c.model || "Unknown",
  year: c.year || "2023",
  kmDriven: c.kmDriven || 0,
  city: c.city || "Unknown",
  state: c.state || "Unknown",
}));

const brands = useMemo(() => uniqueValues(CARS, "brand"), [CARS]);
const vehicles = useMemo(() => uniqueValues(CARS, "type"), [CARS]);
const fuels = useMemo(() => uniqueValues(CARS, "fuel"), [CARS]);


  const toggleExpand = (key) => setExpanded((p) => ({ ...p, [key]: !p[key] }));

  const toggleFilter = (group, value) =>
    setFilters((p) => {
      const exists = p[group].includes(value);
      return { ...p, [group]: exists ? p[group].filter((v) => v !== value) : [...p[group], value] };
    });

  const removeChip = (group, val) => {
    if (group === "condition") { setCondition(""); return; }
    toggleFilter(group, val);
  };

  const clearAll = () => {
    setFilters({ brand: [], vehicle: [], fuel: [] });
    setCondition("");
    setBrandSearch("");
    setSortBy("featured");
  };

const filteredCars = useMemo(() => {
  let out = CARS;

  if (condition) out = out.filter((c) => c.condition === condition);
  if (filters.brand.length) out = out.filter((c) => filters.brand.includes(c.brand));
  if (filters.vehicle.length) out = out.filter((c) => filters.vehicle.includes(c.type));
  if (filters.fuel.length) out = out.filter((c) => filters.fuel.includes(c.fuel));

  // ✅ Add this block
  if (filters.budget) {
    out = out.filter((c) => {
      const price = currency === "USD" ? c.usdprice : c.sspprice;
      return price <= filters.budget;
    });
  }
  if (filters.budgetRange) {
    out = out.filter((c) => {
      const price = currency === "USD" ? c.usdprice : c.sspprice;

      if (filters.budgetRange === "low") {
        return currency === "USD"
          ? price >= 1000 && price <= 15000
          : price >= 785000 && price <= 1570000;
      }
      if (filters.budgetRange === "mid") {
        return currency === "USD"
          ? price > 15000 && price <= 25000
          : price > 1570000 && price <= 2350000;
      }
      if (filters.budgetRange === "high") {
        return currency === "USD"
          ? price > 25000 && price <= 40000
          : price > 2350000 && price <= 3140000;
      }
      return true;
    });
  }
  // ✅ End budget filter

  if (sortBy === "low")
    out = out.slice().sort((a, b) => (currency === "USD" ? a.usdprice - b.usdprice : a.sspprice - b.sspprice));
  else if (sortBy === "high")
    out = out.slice().sort((a, b) => (currency === "USD" ? b.usdprice - a.usdprice : b.sspprice - a.sspprice));

  const anyFilterApplied =
    filters.brand.length || filters.vehicle.length || filters.fuel.length || condition || filters.budget || filters.budgetRange;

  return anyFilterApplied ? out : out.slice(0, 5);
}, [condition, filters, sortBy, CARS, currency]);



  const visibleBrands = brands.filter((b) => b.toLowerCase().includes(brandSearch.trim().toLowerCase()));
  const chips = [...(condition ? [{ group: "condition", label: `${condition} Car` }] : []),
                 ...filters.brand.map((b) => ({ group: "brand", label: b })),
                 ...filters.vehicle.map((v) => ({ group: "vehicle", label: v })),
                 ...filters.fuel.map((f) => ({ group: "fuel", label: f }))];

  return (
    <div className="buycar-page-wrap">
      <div className="buycar-wrap" role="main" aria-label="Buy Car page">
        {/* Sidebar code unchanged */}
         <aside className="buycar-sidebar" aria-label="Filters">
          {/* Condition */}
        <div className="buycar-section">
          <div className="buycar-section-title">Condition</div>
            <div className="buycar-condition-btns">
             <button
                className={`buycar-pill ${condition === "New" ? "buycar-pill--active" : ""}`}
                onClick={() => setCondition(condition === "New" ? "" : "New")}
              >
                NEW CAR
              </button>
              <button
                className={`buycar-pill ${condition === "Old" ? "buycar-pill--active" : ""}`}
                onClick={() => setCondition(condition === "Old" ? "" : "Old")}
              >
                OLD CAR
              </button>
            </div>
          </div>

          {/* Budget */}
          {/* Budget */}
          <div className="buycar-filter">
            <h4 onClick={() => toggleExpand("budget")}>
              <span>Budget</span>
              <span className="buycar-toggle-icon">{expanded.budget ? "–" : "+"}</span>
            </h4>

            {expanded.budget && (
              <div style={{ marginTop: 8 }}>
                {/* Dynamic legend */}
                <div className="buycar-range-legend">
                  {currency}{" "}
                  {currency === "USD" ? "1,000 — 50,000" : "300,000 — 15,000,000"}
                </div>

                {/* Range Slider */}
                <input
                  className="buycar-range"
                  type="range"
                  min={currency === "USD" ? 1000 : 300000}
                  max={currency === "USD" ? 50000 : 15000000}
                  step={currency === "USD" ? 500 : 50000}
                  value={filters.budget || (currency === "USD" ? 1000 : 300000)}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      budget: Number(e.target.value),
                      budgetRange: null, // reset checkbox if slider is moved
                    }))
                  }
                />

                <div style={{ marginTop: 10, fontSize: 13, color: "#6b7b8c" }}>
                  Selected:{" "}
                  {filters.budget
                    ? `${currency} ${filters.budget.toLocaleString()}`
                    : "Not selected"}
                </div>

                {/* Checkbox Ranges */}
                <div className="buycar-checkbox-group" style={{ marginTop: 8 }}>
                  <label className="buycar-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.budgetRange === "low"}
                      onChange={() =>
                        setFilters((prev) => ({
                          ...prev,
                          budgetRange: prev.budgetRange === "low" ? null : "low",
                          budget: null, // reset slider if checkbox picked
                        }))
                      }
                    />{" "}
                    {currency === "USD"
                      ? "$1K – $15K"
                      : "7.85L – 15.7L SSP"}
                  </label>

                  <label className="buycar-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.budgetRange === "mid"}
                      onChange={() =>
                        setFilters((prev) => ({
                          ...prev,
                          budgetRange: prev.budgetRange === "mid" ? null : "mid",
                          budget: null,
                        }))
                      }
                    />{" "}
                    {currency === "USD"
                      ? "$15K – $25K"
                      : "15.7L – 23.5L SSP"}
                  </label>

                  <label className="buycar-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.budgetRange === "high"}
                      onChange={() =>
                        setFilters((prev) => ({
                          ...prev,
                          budgetRange: prev.budgetRange === "high" ? null : "high",
                          budget: null,
                        }))
                      }
                    />{" "}
                    {currency === "USD"
                      ? "$25K – $40K"
                      : "23.5L – 31.4L SSP"}
                  </label>
                </div>
              </div>
            )}
          </div>


          {/* Brand */}
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
                    <FaSearch />
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
                        {b}{" "}
                        <small style={{ color: "#6b7b8c" }}>
                          ({CARS.filter((c) => c.brand === b).length})
                        </small>
                      </span>
                    </label>
                  ))}
                  {visibleBrands.length === 0 && <div className="buycar-muted">No brands found</div>}
                </div>
              </>
            )}
          </div>

          {/* Vehicle Type */}
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
                      {v} <small style={{ color: "#6b7b8c" }}>({CARS.filter((c) => c.type === v).length})</small>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Fuel */}
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
                      {f} <small style={{ color: "#6b7b8c" }}>({CARS.filter((c) => c.fuel === f).length})</small>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* The rest of filters (Transmission, Features, Mileage, Seats, Airbags, Cylinders, Wheel Drive) */}
          {/* Keep your original code here exactly the same */}
          {/* ... */}

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
                    onClick={() => c.group === "condition" ? removeChip("condition") : removeChip(c.group, c.label)}
                    title={`Remove ${c.label}`}
                  >
                    {c.label} <span className="buycar-chip-x">X</span>
                  </button>
                ))}
                <button className="buycar-chip buycar-chip-clear" onClick={clearAll}>Clear All Filters</button>
              </div>
            </div>

            <div className="buycar-sort-wrap">
              <label htmlFor="sort" className="buycar-sort-label">Sort By</label>
              <select id="sort" className="buycar-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

<div className="buycar-list">
  {/* Show loading first */}
  {loading && <div className="buycar-loading">Loading cars...</div>}

  {/* Show error if something went wrong */}
  {!loading && error && (
    <div className="buycar-error">Failed to load cars: {error}</div>
  )}

  {/* Show "No cars" if nothing to show */}
  {!loading && !error && filteredCars.length === 0 && (
    <div className="buycar-empty">No cars match your filters.</div>
  )}

  {/* Show cars when data is ready */}
  {!loading && !error && filteredCars.length > 0 &&
    filteredCars.map((car, i) => (
      <article className="buycar-card" key={car.id} aria-label={car.name}>
        <div className="buycar-card-img">
          {car.images[0] ? (
            <img src={car.images[0]} alt={car.name} className="buycar-img" />
          ) : (
            <CarSVG label={car.name} variant={i} />
          )}
        </div>
        <div className="buycar-card-body">
          <div>
            <h3 className="buycar-card-title">{car.name}</h3>
            <div className="buycar-rating">
              {car.rating} ★ | {Math.round(car.rating * 40)} Reviews
            </div>
          </div>
          <div className="buycar-price">
          {formatPrice(car, currency)}{" "}
          <span className="on_road">* Get on-road Price</span>{" "}
          <small className="ex-showroom">*Ex-Showroom Price</small>
        </div>
          <div className="buycar-meta">
            <div>12 km/l</div>
            <div>2,755 cc</div>
            <div>7 Seater</div>
          </div>
          <div className="buycar-cta">
            <button
              className="buycar-btn-primary"
              onClick={() => setSelectedCar(car)}
            >
              VIEW DETAILS
            </button>
          </div>
        </div>
      </article>
    ))}
</div>


        </section>
      </div>

      {/* View Details Popup */}
      {selectedCar && <ViewDetails car={selectedCar} onClose={() => setSelectedCar(null)} />}
    </div>
  );
}

function formatPrice(car, currency) {
  const price = currency === "USD" ? car.usdprice : car.sspprice;
  if (!price) return "Price not available";

  return `${currency} ${Number(price).toLocaleString()}`;
}




