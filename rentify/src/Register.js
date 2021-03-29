import React from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  return (
    <div className="register">
      <div className="input__types">
        <h1 className="title">SignUp</h1>

        <input type="text" className="input" placeholder="Enter Firstname*" />
        <input type="text" className="input" placeholder="Enter Lastname*" />
        <input
          type="text"
          className="input"
          placeholder="Enter Email Address*"
        />
        <input type="text" className="input" placeholder="Enter Password*" />
        <input
          type="text"
          className="input"
          placeholder="Enter Contact Number*"
        />
        <h1 className="birthday">Birthday</h1>
      </div>

      <div className="birthday__component">
        <div className="month__dropdownList">
          <select className="month__dropdown">
            <option value="Month">Month</option>
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
        </div>
        <div className="days__dropdownList">
          <select className="days__dropdown">
            <option value="day">Date</option>
            <option value="mon">1</option>
            <option value="tues">2</option>
            <option value="wed">3</option>
            <option value="thurs">4</option>
            <option value="fri">5</option>
            <option value="sat">6</option>
            <option value="sun">7</option>
            <option value="mon">8</option>
            <option value="tues">9</option>
            <option value="wed">10</option>
            <option value="mon">11</option>
            <option value="tues">12</option>
            <option value="wed">13</option>
            <option value="thurs">14</option>
            <option value="fri">15</option>
            <option value="sat">16</option>
            <option value="sun">17</option>
            <option value="mon">18</option>
            <option value="tues">19</option>
            <option value="wed">20</option>
            <option value="mon">21</option>
            <option value="tues">22</option>
            <option value="wed">23</option>
            <option value="thurs">24</option>
            <option value="fri">25</option>
            <option value="sat">26</option>
            <option value="sun">27</option>
            <option value="mon">28</option>
            <option value="tues">29</option>
            <option value="wed">30</option>
          </select>
        </div>
        <div className="date__dropdownList">
          <select className="date__dropdown">
            <option name="year">Year</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            <option value="1989">1989</option>
            <option value="1988">1988</option>
          </select>
        </div>
      </div>
      <div className="checkboxWithText">
        <div className="input__checkbox">
          <input className="checkbox" type="checkbox" />
        </div>
        <div className="text">
          <p className="checkbox_text">
            I’d like to receive coupons, promotions, surveys, and updates via
            email about Rentify and its partners.
          </p>
        </div>
      </div>
      <div className="button_signup">
        <button className="btn__signup">Sign Up</button>
      </div>
      <div className="already__account">
        <div className="already__text">
          <p className="alreadyText">Already have a Rentify account?</p>
        </div>
        <div className="already_btn">
          <button
            onClick={() => history.push("/login")}
            className="already__login"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
