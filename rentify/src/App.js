import Shirt from "./Shirt";
import Header from "./Header";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Howworks from "./Howworks";
import Product from "./Product";
import Login from "./Login";
import Footer from "./Footer";
import './Footer.css'
import Electronic from "./Electronic";
import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';

import Search_bar from './Search_bar';
import './Search_bar.css';

import Single from './Single';
import './Single.css';

import './Categories.css'
import Categories from './Categories'

import Productscreen from "./Productscreen";
import Favorite from "./Favorite";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Search_bar/>,
      <Categories/>
      {/* <Banner />
      <Howworks />
      <Product /> */}
      <Footer />,
      {/* <Categories/> */}
      
 
    </div>
  );
}

export default App;
