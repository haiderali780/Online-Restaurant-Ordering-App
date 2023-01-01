
import {Fragment} from 'react'
import foodImage from '../../assests/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header=props=>
{ 
  return(
   <Fragment>
    <header className={classes.header}>
        <h1>
        The Neighborhood Nook
        </h1>
        <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
   <img src={foodImage} alt="A table full of Dishes"/>
    </div>
   </Fragment>
  );
}
export default Header;