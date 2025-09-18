// import { FaShieldAlt,FaBullhorn,  FaClock ,FaSearch , FaChevronDown,
//      FaRegCalendarAlt , FaPlay} from "react-icons/fa";
// import { useState } from "react";
// import './CarSearchForm.css'
// import { Link } from "react-router-dom";


// export default function CarSearchForm(){

  
//     const  options = [
          
//             {value : "/buy-cars" , button: "BUY CAR" ,label:"Buy"},
//             {value : "/sell-cars" , button: "SELL CAR", label:"Sell"},
//     ]
//     const [selectedOption, setSelectedOption] = useState(options[0]);
//     const [budget, setBudget] = useState(300000);


//     return (
//         <div className="form-box">
//             <div className="serach-box">    

//                 <h1>{selectedOption.label} a Car</h1>
//                 <div className="search_cars">
//                     <p className="search_car_placeholder">
//                         <input  type="serach" placeholder="Search Cars"/>
//                         <FaSearch className="serach-icon"/> 
//                     </p>
                  
                    

                    
//                     <select id="car_type"
//                         value={selectedOption.value}
//                         onChange={(e)=>{
//                             const selected = options.find(opt=> opt.value===e.target.value)
//                             setSelectedOption(selected)
//                         }

//                     }>

//                         <option value= "/buy-cars"> BUY CAR</option> 
//                         <option value= "/sell-cars"> SELL CAR</option>
//                     </select>
//                     <FaChevronDown className="dropdown-icon" />
                    


//                 </div>

//                 <div className="model_option">
//                     <p>
//                     <select id="make_box">
//                         <option value="make">Make</option>
//                         <option value="Sell">Sell</option>
//                     </select>
//                     <FaChevronDown id="box_dropdown" />
//                     </p>
                   
                    
//                     <p>
//                     <select id="model_box">
//                         <option value="model">Model</option>
//                         <option value="model1">Model2</option>

//                     </select>
//                      <FaChevronDown id="box_dropdown"/>
//                     </p>
                    
//                     {/* <p className="calander_paragraph">
//                         <input className="calander_input" type="date" placeholder="Year"/>
//                         <FaRegCalendarAlt className="calander_icon"/>
//                     </p> */}

//                     <p className="calendar_paragraph">
//                         <input className="calendar_input" type="date" />
//                         <FaRegCalendarAlt className="calendar_icon" />
//                     </p>




//                 </div>
//                 <p id="budget_heading"> Budget</p>
//                 <div className="slider">

//                     <div className="single-slider">
//                         <label className="budget" htmlFor="budget">
//                             SSP 300,000 - SSP {budget} <br />
//                             {/* Selected: {budget.toLocaleString()} */}
//                         </label>
                        
//                         <input
//                             type="range"
//                             id="budget"
//                             name="budget"
//                             min="300000"
//                             max="1500000"
//                             step="10000"
//                             value={budget}
//                             onChange={(e) => setBudget(Number(e.target.value))}
//                         />
                        
//                       </div>
//                       <Link to="/buy-cars">
//                       <button className="advance_search">Advanced Search</button>
//                       <FaPlay className="play_button"/>
//                        </Link> 
//                 </div>
                

                
//             </div>

//             <div className="sell_car_icon">
//                 <h1> {selectedOption.label} Your Car</h1>
                    
//                 <div  className="sell_car_grid">
    
//                         <div>
//                         <FaShieldAlt size={40} color="#294872" />
//                         <p>Get paid securely<br/>without delay</p>
//                         </div>

//                         <div>
//                         <FaBullhorn size={40} color="#294872" />
//                         <p>Free Listing<br/>Instant Reach</p>
//                         </div>

//                         <div>
//                         {/* No exact "file slash", but close option */}

                        
//                         <FaBullhorn  size={40} color="#294872" />
//                         <p>No Paperwork<br/>Hassle</p>
//                         </div>

//                         <div>
                       
//                         <FaClock size={40} color="#294872" style={{ marginLeft: "10px" }} />
//                         <p>30-45 Min<br/>Inspection Time</p>
//                         </div>

//                 </div>
//                 <Link to={selectedOption.value}>
//                      <button className="sell_btn">{selectedOption.button}</button>
//                 </Link>

//             </div>
//         </div>
//     )
// }

import {
  FaShieldAlt,
  FaBullhorn,
  FaClock,
  FaSearch,
  FaChevronDown,
  FaRegCalendarAlt,

} from "react-icons/fa";
import { useState } from "react";
import "./CarSearchForm.css";
import { Link } from "react-router-dom";

export default function CarSearchForm() {
  const options = [
    { value: "/buy-cars", button: "BUY CAR", label: "Buy" },
    { value: "/sell-cars", button: "SELL CAR", label: "Sell" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [budget, setBudget] = useState(300000);

  return (
    <div className="form-box">
      <div className="serach-box">
        <h1>{selectedOption.label} a Car</h1>
        <div className="search_cars">
          <div className="search-input-wrapper">
            <FaSearch className="search-icon" />
            <input type="search" placeholder="Search Cars" />
          </div>

          <select
            id="car_type"
            value={selectedOption.value}
            onChange={(e) => {
              const selected = options.find(
                (opt) => opt.value === e.target.value
              );
              setSelectedOption(selected);
            }}
          >
            <option value="/buy-cars"> BUY CAR</option>
            <option value="/sell-cars"> SELL CAR</option>
          </select>
          <FaChevronDown className="dropdown-icon" />
        </div>

        <div className="model_option">
          <div className="select-wrapper">
            <select id="make_box">
              <option value="make">Make</option>
              <option value="Sell">Sell</option>
            </select>
            <FaChevronDown className="dropdown-icon" />
          </div>

          <div className="select-wrapper">
            <select id="model_box">
              <option value="model">Model</option>
              <option value="model1">Model2</option>
            </select>
            <FaChevronDown className="dropdown-icon" />
          </div>

          <div className="calendar_paragraph">
            <input className="calendar_input" type="date" />
            <FaRegCalendarAlt className="calendar_icon" />
          </div>
        </div>

        <p id="budget_heading"> Budget</p>
        <div className="slider">
          <div className="single-slider">
            <label className="budget" htmlFor="budget">
              SSP 300,000 - SSP {budget} <br />
              {/* Selected: {budget.toLocaleString()} */}
            </label>

            <input
              type="range"
              id="budget"
              name="budget"
              min="300000"
              max="1500000"
              step="10000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
          </div>
          <Link to="/buy-cars">
            <button className="advance_search">Advanced Search</button>
            {/* <FaPlay className="play_button"/> */}
          </Link>
        </div>
      </div>

      <div className="sell_car_icon">
        <h1> {selectedOption.label} Your Car</h1>

        <div className="sell_car_grid">
          <div>
            <FaShieldAlt size={40} color="#294872" />
            <p>
              Get paid securely
              <br />
              without delay
            </p>
          </div>

          <div>
            <FaBullhorn size={40} color="#294872" />
            <p>
              Free Listing
              <br />
              Instant Reach
            </p>
          </div>

          <div>
            {/* No exact "file slash", but close option */}

            <FaBullhorn size={40} color="#294872" />
            <p>
              No Paperwork
              <br />
              Hassle
            </p>
          </div>

          <div>
            <FaClock size={40} color="#294872" style={{ marginLeft: "10px" }} />
            <p>
              30-45 Min
              <br />
              Inspection Time
            </p>
          </div>
        </div>
        <Link to={selectedOption.value}>
          <button className="sell_btn">{selectedOption.button}</button>
        </Link>
      </div>
    </div>
  );
}
