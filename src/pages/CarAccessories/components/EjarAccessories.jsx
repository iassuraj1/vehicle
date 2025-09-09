import "./EjarAccessories.css";

// update paths as per your assets folder
import brandIcon from "../../../assets/CarAccessories/shield_icon.png";
import fitIcon from "../../../assets/CarAccessories/like_icon.png";
import installIcon from "../../../assets/CarAccessories/setting_icon.png";
import upgradeIcon from "../../../assets/CarAccessories/bar_icon.png";

export default function Accessories() {
  return (
    <div className="parent_acc_container">
        <div className="acc__container">
          <h2 className="acc__heading">Why Choose Ejar Accessories?</h2>

          <div className="acc__grid">
            {/* Card 1 */}
            <div className="acc__item">
              <img src={brandIcon} alt="Authentic Brands" className="acc__icon" />
              <h3 className="acc__title">Authentic &amp; <br/> Trusted Brands</h3>
              <p className="acc__desc">100% genuine accessories only</p>
            </div>

            {/* Card 2 */}
            <div className="acc__item">
              <img src={fitIcon} alt="Perfect Fit" className="acc__icon" />
              <h3 className="acc__title">Perfect<br/> Fit</h3>
              <p className="acc__desc">
                Designed for your car’s make and model
              </p>
            </div>

            {/* Card 3 */}
            <div className="acc__item">
              <img src={installIcon} alt="Easy Installation" className="acc__icon" />
              <h3 className="acc__title">Easy <br/> Installation</h3>
              <p className="acc__desc">
                Hassle-free fitting with expert support
              </p>
            </div>

            {/* Card 4 */}
            <div className="acc__item">
              <img src={upgradeIcon} alt="Upgrade Anytime" className="acc__icon" />
              <h3 className="acc__title">Upgrade <br/> Anytime</h3>
              <p className="acc__desc">
                From basics to premium customizations
              </p>
            </div>
          </div>
         </div>

    </div>
    
  );
}
