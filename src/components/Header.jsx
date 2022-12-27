import styled from 'styled-components'
import image from '../images/illustration-intro.svg'
import Navbar from './Navbar'
const Header = () => {
  return (
    <Headerstyle>
     
     <div className="time">
      <Navbar/>
      <div className="container">
        <div className="container__text">
            <h1>Bring evryone together to build better products.</h1>
            <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <button className="Get-started-btn">Get Started</button>
        </div>
        <div className="container__image"><img src={image} alt="" /></div>
      </div>
      </div>
      <img className='bg' src="./bg-tablet-pattern.svg" alt="" />
      <img className='bgg' src="./bg-tablet-pattern.svg" alt="" />

    </Headerstyle>
  )
}

export default Header

const Headerstyle = styled.div`

position: relative;
overflow: hidden;
.time{
  width: 80%;
margin: auto;
}
.bg{
  position: absolute;
  top: -6rem;
  right: -6rem;
  z-index: -1;
  width: 40rem;
  
}
    .bgg{
    display: none;
    top:-34%;
    left:63%;
    position: absolute;
    width: 17rem;
    
}
.container{
    display: grid;
    grid-template-columns: 45% 45%;
   gap: 10%;
  
}
.container__text{
    padding-top: 1.5rem;
    h1{
        color: var(--Dark-Blue);
        font-size: 2.7rem;
        margin-bottom: 2rem;
    }
    p{
        color: hsl(227, 12%, 61%);
       
        line-height: 1.6;
        margin-bottom: 2rem;
    }
    .Get-started-btn{
  padding: 0.8rem 2rem;
  border-radius: 1.5rem;
  border: none;
  color: #fff;
  background-color: var(--bright-red);
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 1rem;
  /* box-shadow: 0px 5px 10px var(--bright-red); */
  box-shadow: 0px 7px 10px rgb(211, 121, 121,0.7);
  &:hover{
    background-color: var(--light-bright-red);
  }
}
}
.container__image{
    img{
        width: 100%;
    }
}

/* MEDAI QUERY */

@media screen and (max-width:1024px) {
 .time{
  width: 90%;
 }
    .container{
        grid-template-columns: 47% 47%;
        gap: 6%;
    }
    .container__text{
        h1{
            font-size: 2rem;
        }
    }
}

@media screen and (max-width:900px) {

.container{
    grid-template-columns: 49% 49%;
    gap: 2%;
}
.container__text{
    h1{
      margin-bottom: 1rem;
    }
    p{
      margin-bottom: 1rem;
    }
}

}
@media screen and (max-width:780px) {
  .bg{

  top: -5rem;
  right: -6rem;
  width: 37rem;
  
}
.container{
    grid-template-columns: 49% 49%;
    gap: 2%;
}
.container__text{
    h1{
      margin-bottom: 0.5rem;
    }
    p{
      margin-bottom: 0.5rem;
    }
}

}

@media screen and (max-width:760px) {
  .container{
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .container__text{
    grid-area: 2;
    h1{
        margin-bottom: 1rem;
    }
    p{
        margin-bottom: 1rem;
    }
  }
  .container__image{
    grid-area: 1;
  }

}
@media screen and (max-width:500px) {
.bg{
  width: 35rem;
}
.bgg{
  display: flex;
  top:-34%;
  left:63%;
  
  width: 17rem;
  
}
}

@media screen and (max-width:500px) {
    .container{
        gap: 1rem;
    }
.container__text{
    text-align: center;
}

}
@media screen and (max-width:474px) {
.bg{
  width: 30rem;
}
}
@media screen and (max-width:390px) {
.bg{
  width: 28rem;
  top: -3rem;
  right: -8rem;
}
}
`

