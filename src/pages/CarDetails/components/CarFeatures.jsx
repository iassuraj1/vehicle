import "./CarFeatures.css";
import engineImg from "../../../assets/CarDetails/engine.jpg";
import safetyImg from "../../../assets/CarDetails/safety.jfif";
import interiorImg from "../../../assets/CarDetails/Interiors.jpg";
import TouchscreenImg from "../../../assets/CarDetails/Touchscreen.jfif";



export default function CarFeatures() {
  return (
    <div className="cf__wrap">
      <h2 className="cf__title">Features of the Car</h2>

      {/* Card 1 */}
      <section className="cf__card">
        <div className="cf__media">
          <img src={engineImg} alt="V6 Twin-Turbo Engine" />
        </div>
        <div className="cf__body">
          <h3 className="cf__subtitle">Powerful V6 Twin-Turbo Engine</h3>
          <ul className="cf__list">
            <li>409 hp with smooth acceleration</li>
            <li>Excellent towing capacity</li>
            <li>Optimized for both city and off-road driving</li>
          </ul>
          <button type="button" className="cf__btn">VIEW CAR</button>
        </div>
      </section>

      {/* Card 2 (reversed) */}
      <section className="cf__card cf__card--reverse">
        <div className="cf__body">
          <h3 className="cf__subtitle">Advanced Safety Suite</h3>
          <ul className="cf__list">
            <li>Adaptive cruise control for stress-free highways</li>
            <li>Lane departure warning &amp; assist</li>
            <li>10 airbags with reinforced body structure</li>
          </ul>
          <button type="button" className="cf__btn">VIEW CAR</button>
        </div>
        <div className="cf__media">
          <img src={safetyImg} alt="Advanced Safety" />
        </div>
      </section>

      {/* Card 3 */}
      <section className="cf__card">
        <div className="cf__media">
          <img src={interiorImg} alt="Premium Interiors" />
        </div>
        <div className="cf__body">
          <h3 className="cf__subtitle">Premium Interiors</h3>
          <ul className="cf__list">
            <li>Perforated leather ventilated seats</li>
            <li>4-zone automatic climate control</li>
            <li>Spacious cabin with ergonomic design</li>
          </ul>
          <button type="button" className="cf__btn">VIEW CAR</button>
        </div>
      </section>



        {/* Card 4 (reversed) */}
      <section className="cf__card cf__card--reverse">
        <div className="cf__body">
          <h3 className="cf__subtitle">Touchscreen Infotainment</h3>
          <ul className="cf__list">
            <li>Apple Car Play & Android Auto integration</li>
            <li>Surround sound premium speaker</li>
            <li>Easy navigation with live traffic updates</li>
          </ul>
          <button type="button" className="cf__btn">VIEW CAR</button>
        </div>
        <div className="cf__media">
          <img src={TouchscreenImg} alt="Advanced Safety" />
        </div>
      </section>
      <div className="button">
        
            <button className="view_detils_button"> View Details</button>

      </div>
      
    
    </div>
  );
}
