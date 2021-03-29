import React,{Component} from 'react';
import ReactDOM from 'react-dom';



class Single extends Component{
    render()
    {
        return(
            <div>
                <div className='fluid-container '>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12 side-bar'>
                                <div className='rent-price'>
                                    <h4>PKR 1,000 per month</h4>
                                    <h6>Last Updated: 5 months ago</h6>
                                </div>
                                <br></br>
                                <div className="seller-info">
                                    <div className="titles">
                                        <h6>Seller Contact Details</h6>
                                    </div>
                                    <br></br>
                                    <div className="seller-contact">
                                        <img src="https://lh3.googleusercontent.com/a-/AAuE7mC1Chk9mL5CatYVIvkpYq6xhySIAWLeqBSdn2Ok" alt="profile-pic" width="150" height="150"/>
                                        <h4><a href="" >Usama Muneer</a></h4>
                                        <h6>Member Since: Feb 12 2020</h6>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <input className='form-control' type="submit" value="BOOK NOW" />
                                    
                                </div>
                                <br></br>
                                <br></br>
                                <hr></hr>
                                <br></br>
                                
                            </div>
                            <div className='col-lg-8 col-md-8 col-sm-12 main-product'>
                                <a href='#abc'>Books, Sports & Hobbies</a>
                                <hr></hr>
                                <h3>Mountain bike</h3>
                                <h6>Posted By: <a href='#abc'>Usama Muneer</a></h6>
                                <h6>Location: <a href='#abc'>Islamabad</a></h6>
                                <div className='product-image'> 
                                    <img src="https://rentable.pk/_next/image?url=https%3A%2F%2Fassets-rentable.sgp1.digitaloceanspaces.com%2Frentablepk%2Fimages%2FpuLqCHlvUb0ePGIyaPFJ1w8m99AcGnyX3pAs5Ra2.jpeg&w=1024&q=75" alt="product" width='400' height='500'/>
                                </div>
                                <br></br>
                                <div className="product-info">
                                    <h4>Details</h4>
                                    <hr></hr>
                                    {/* <table class="table table-striped  table-hover table-condensed ">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Price</th>
                                                <td>PKR 22000</td>
                                                <th scope="row">Condition</th>
                                                <td>Used</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rent Value</th>
                                                <td>PKR 1000</td>
                                                <th scope="row">Avaiablility From</th>
                                                <td>29/10/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rent Negotable</th>
                                                <td>No</td>
                                                <th scope="row">Avaiablility To</th>
                                                <td>29/11/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Location</th>
                                                <td>Islamabad</td>
                                                <th scope="row">Rental Period</th>
                                                <td>30 Days</td>
                                            </tr>
                        
                                        </tbody>
                                    </table> */}
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                            <ul >
                                                <li><b>Price: </b>PKR 22000</li>
                                                <li><b>Rent Value: </b>PKR 1000</li>
                                                <li><b>Rent Negotable: </b>No</li>
                                                <li><b>Location: </b>Islamabad</li>
                                            </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <ul>
                                                    <li><b>Condition: </b>Used</li>
                                                    <li><b>Avaiablility From: </b>29/10/2020</li>
                                                    <li><b>Avaiablility To: </b>29/11/2020</li>
                                                    <li><b>Rental Period: </b>30 Days</li>
                                                        
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="product-description">
                                    <h4>Description</h4>
                                    <hr></hr>
                                    <p>Sports mountain bike for rent. Slightly used. Excellent condition. Gears working perfectly fine.</p>
                                </div>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Single;