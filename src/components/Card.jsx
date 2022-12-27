import styled from "styled-components"
import Image from '../images/bg-simplify-section-desktop.svg'
const Card = () => {
  return (
    <Cardstyle>
      <div className="bg__card"> <img src={Image} alt="" /></div>
      <div className="container">
         <div className="container__content">
            <h2>Simplify how your team work today.</h2>
             <button className="Get-started-btn">Get Started</button>
         </div>
        </div>
     
    </Cardstyle>
  )
}

export default Card

const Cardstyle = styled.div`
position: relative;
background-color: var(--bright-red);
overflow: hidden;

.bg__card{
position: absolute;
bottom: -27%;
left: 10%;
}
.container{
  width: 80%;
  margin: auto;
height: 12rem;
}
.Get-started-btn{
  padding: 0.8rem 2rem;
  border-radius: 1.5rem;
  border: none;
  color: var(--bright-red);
  background-color: #fff;
  cursor: pointer;
  font-weight: 700;
  /* box-shadow: 0px 5px 10px var(--bright-red); */
  box-shadow: 0px 10px 20px rgb(211, 121, 121,0.7);
  &:hover{
    color: #ee9984;
  }
}
.container__content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 3rem;
    h2{
        max-width:400px;
        color:var(--Vary-Light-Gray);
        font-size: 2rem;
    }
}

/* MEDIA QUERY */

@media screen and (max-width:700px) {
  .container{
    height: 17rem;
  }
  .container__content{
    flex-direction: column;
    text-align: center;
    h2{
      margin-bottom: 1.5rem;
    }
  }
}
@media screen and (max-width:500px) {
  .bg__card{
position: absolute;
bottom: 0%;
left: -110%;
}
}
`