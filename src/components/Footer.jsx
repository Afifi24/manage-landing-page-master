import styled from "styled-components"
import Facebook from '../images/icon-facebook.svg'
import Youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'
import Logo from '../images/logo.svg'
const Footer = () => {
  return (
    <Footerstyle>
    <div className="footer">
        <div className="left">
            <div className="logo"><img src="" alt="" /> <img src={Logo} alt="" /></div>
            <div className="social-icon">
               <img src={Facebook} alt="" />
               <img src={Youtube} alt="" />
               <img src={twitter} alt="" />
               <img src={pinterest} alt="" />
               <img src={instagram} alt="" />
            </div>
        </div>
       <ul className="nav1">
        <li>Home</li>
        <li>Pricing</li>
        <li>Products</li>
        <li>About Us</li>
       </ul>
       <ul className="nav2">
        <li>Careers</li>
        <li>Community</li>
        <li>Privacy Policy</li>
       </ul>
       <div className="right">
        <form action="">
            <input type="text" placeholder="Updates in your inbox..." />
            <button type="submit">Go</button>
        </form>
        <div className="copyright">Copyright 2022. All Rights Reserved</div>
       </div>
    </div>
    </Footerstyle>
  )
}

export default Footer


const Footerstyle = styled.div`
    background-color: var(--Very-Dark-Blue);

.footer{
    color: #fff;
    display: grid;
    grid-template-columns:2fr 2fr 2fr 2fr;
    padding: 4rem 0rem;
    gap: 2rem;
   width: 80%;
   margin: auto;

}
.nav1,
.nav2{
    display: flex;
    flex-direction:column;
    gap: 0.8rem;
    li{
        font-size: 13px;
        cursor: pointer;
        color: var(--Very-Pale-Red);
        transition: var(--transition);
        &:hover{
        color: var(--Dark-Grayish-Blue);
            
        }
    }
}
.left{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    .logo{
        filter: brightness(0) invert(1);
      
}
}

.social-icon{
display: flex;

gap: 0.7rem;
}
.right{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    form{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
    }
    input{
        width: 10rem;
        height: 2rem;
        border: none;
        border-radius: 1rem;
        padding: 0 0.9rem;
        font-size: 11px;
    }
    button{
        height: 2rem;
        width: 3rem;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        color: #fff;
        background-color: var(--bright-red);
    }
}
.copyright{
    color: var(--Dark-Grayish-Blue);
    font-size: 10px;
    padding-left :2.5rem;
   
}

/* MEDIQ QUERY */


@media screen and (max-width:1000px) {
    .footer{
        grid-template-columns:3fr 2fr 1.5fr 1.5fr;
    }
}
@media screen and (max-width:900px) {
    .footer{
        grid-template-columns:1fr;
        place-items: center;
    }
    .left{
        gap: 2rem;
    }
    .right{
        gap: 2rem;
    }
    .copyright{
        
    }
}
`