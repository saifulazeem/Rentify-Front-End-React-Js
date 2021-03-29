
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";


class Footer extends Component{
    render()
    {
        return(
            <div>
                <div className='fluid-container footer-background'>
                    
                    <div className='container'>
                        <br></br>
                        <div className='row'>
                            <div className='col-lg-8 col-md-5 col-sm-12'>
                            <h1>RentiFy</h1>
                            <p className="footer_description">
                                Just another classified website, where customers can turn their
                                liabilities into paying assets by renting out their liable stuff with
                                ability to secure their rental transactions with easy rental
                                agreements.
                            </p>
                            </div>
                            <div className='col-lg-4 col-md-5 col-sm-12'>
                              <h1>Follow US</h1>
                              <FacebookIcon className="fb__icon" />
                              <TwitterIcon className="twitter__icon" />
                              <InstagramIcon className="insta__icon" />
                              <p>2021, All Rights Reserved - <span>Rentify Pakistan</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;




// import React from "react";
// import "./Footer.css";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import InstagramIcon from "@material-ui/icons/Instagram";

// function Footer() {
//   return (
//     <div className="footer">
//       <div className="footer__left">
//         <h1 className="footer__leftlogo">RENTIFY</h1>
//         <p className="footer__leftdesc">
//           Just another classified website, where customers can turn their
//           liabilities into paying assets by renting out their liable stuff with
//           ability to secure their rental transactions with easy rental
//           agreements.
//         </p>
//       </div>
//       <div className="footer__right">
//         <h1 className="footer__rightheading">Follow Us:</h1>
//         <div className="footer__icons">
//           <FacebookIcon className="fb__icon" />
//           <TwitterIcon className="twitter__icon" />
//           <InstagramIcon className="insta__icon" />
//         </div>
//         <h4 className="footer__rightreserved">
//           2021, All Rights Reserved -
//           <span className="rentable__footer">Rentify Pakistan</span>
//         </h4>
//       </div>
//     </div>
//   );
// }

// export default Footer;


