import { Fragment } from 'react';
// import waffels from '../../assets/waffels.jpg';
import classes from './Header.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>   
    <header className={classes.header}>  
    <a href="#banner" className="logo">
        Chow<span>Now</span>
      </a>
      <ul className="navigation">
        {/* <li><a href="#banner">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expert">Expert</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li> */}
        <li><HeaderCartButton onClick={props.onShowCart}/></li>
      </ul>
      </header>
      <div className="banner">
        
      </div>

       </Fragment>
  );

   
}
 
export default Header;