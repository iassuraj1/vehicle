import { FaShieldAlt,FaBullhorn,  FaClock } from "react-icons/fa";

import './CarSearchForm.css'
export default function CarSearchForm(){

    return (
        <div className="form-box">
            <div className="serach-box">    

                <h1> Buy a Car</h1>
                <div className="search_cars">
                    <input type="serach" placeholder="Search Cars"/> 
                    <select id="car_type">
                        <option value= "new_car"> NEW CAR</option> 
                        <option value= "old_car"> OLD CAR</option>

                    </select>


                </div>

                <div className="model_option">
                    <select id="make_box">
                        <option value="make">Make</option>
                        <option value="Sell">Sell</option>

                    </select>

                    <select id="model_box">
                        <option value="model">Model</option>
                        <option value="model1">Model2</option>

                    </select>

                    <input type="date" placeholder="Year"/>



                </div>
                <p id="budget_heading"> Budget</p>
                <div className="single-slider">           
                    <label className="budget" htmlFor="budget">SSP 300,000 - SSP 15,000,000</label> <br/>
                    <input type="range" id="budget" name="budget" min='300000' max="1500000" step="10000" value="300000"></input>

                </div>

                
            </div>

            <div className="sell_car_icon">
                    
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", textAlign: "center" , fontSize: "12px"  }}>
    
                        <div>
                        <FaShieldAlt size={40} color="#294872" />
                        <p>Get paid securely<br/>without delay</p>
                        </div>

                        <div>
                        <FaBullhorn size={40} color="#294872" />
                        <p>Free Listing<br/>Instant Reach</p>
                        </div>

                        <div>
                        {/* No exact "file slash", but close option */}

                        
                        <FaBullhorn  size={40} color="#294872" />
                        <p>No Paperwork<br/>Hassle</p>
                        </div>

                        <div>
                       
                        <FaClock size={40} color="#294872" style={{ marginLeft: "10px" }} />
                        <p>30-45 Min<br/>Inspection Time</p>
                        </div>

                </div>
                <button className="sell_btn">SELL CAR</button>

            </div>
        </div>
    )
}