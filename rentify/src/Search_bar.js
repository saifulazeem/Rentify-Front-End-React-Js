import React,{Component} from 'react';
import ReactDOM from 'react-dom';



class Search_bar extends Component{
    render()
    {
        return(
            <div>
                <div className='fluid-container header-image'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-5 col-md-5 col-sm-12'>
                            <form>
                                <br></br>
                                <input className='form-control' type="text" name="keywords" placeholder="Search Keywords"  /> 
                            </form>
                            </div>
                            <div className='col-lg-5 col-md-5 col-sm-12'>
                            <form>
                                <br></br>
                                <select class="form-control">
                                <option>Default select</option>
                                <option>Islamabad</option>
                                <option>Lahore</option>
                                <option>Kharachi</option>
                                </select>
                            </form>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                            <br></br>
                                <input className='form-control' type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search_bar;