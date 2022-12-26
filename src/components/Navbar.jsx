import Logo from '../images/logo.svg'
import styled from 'styled-components'
import Humberg from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import { useState } from 'react'
const Navbar = () => {
  const [isshowing,setIsshowing] = useState(false)
  const CloseOpen = ()=>{
    setIsshowing(!isshowing)
    if(!isshowing){
      document.body.style.overflow= 'hidden';
    }else{
      document.body.style.overflow = 'unset'
    }
  }
  return (
    <Navstyle>
      <nav>
      <div className="logo"><img src={Logo} alt="" /></div>
      <div onClick={CloseOpen} className="nav-icon"><img src={isshowing? close : Humberg} alt="humberg" /></div>
      <ul className={isshowing?"nav-menu active":"nav-menu"}>
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>
      <button className="Get-started-btn"> Get Started</button>
      </nav>
    </Navstyle>
  )
}

export default Navbar

const Navstyle = styled.div`
width: 80%;
 margin: auto;
nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0rem;
  margin-bottom: 4rem;
}
.logo{

}
.nav-icon{
  
  display: none;
}
.nav-menu{
  display: flex;
  align-items: center;
  gap: 1.5rem;
  li{
    cursor: pointer;
    transition: var(--transition);
    color: var(--Dark-Blue);
    font-weight: 500;
    font-size: 14px;
    &:hover{
      /* color: var(--Dark-Grayish-Blue); */
      color: hsl(227, 12%, 61%);
    }
  }
}
.Get-started-btn{
  padding: 0.8rem 2rem;
  border-radius: 1.5rem;
  border: none;
  color: #fff;
  background-color: var(--bright-red);
  cursor: pointer;
  font-weight: 700;
  box-shadow: 0px 10px 20px rgb(211, 121, 121,0.7);

  &:hover{
    background-color: var(--light-bright-red);
  }
}

/* MEDIA QUERY */

@media screen and (max-width:1024px) {
  width: 90%;
  .nav-icon{
    display: block;
    cursor: pointer;
    z-index: 100;
  }
  .nav-menu{
    position: absolute;
    height: 60%;
    width: 80%;
    background-color: #fff;
    top: 15%;
    justify-content: space-around;
    left: -200%;
    transition: var(--transition);
    flex-direction: column;
    padding: 2rem 0rem;
    border-radius: 1rem;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.2);
   li{
    font-weight: 700;
   }
  }
  .active{
    /* top: 10%; */
    left: 10%;
  }
  .Get-started-btn{
    display: none;
  }
}
`