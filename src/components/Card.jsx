import styled from "styled-components"

const Card = () => {
  return (
    <Cardstyle>
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

background-color: var(--bright-red);

.container{
  width: 80%;
  margin: auto;
height: 10rem;
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
    padding-top: 3.5rem;
    h2{
        max-width:300px;
        color:var(--Vary-Light-Gray);
    }
}

/* MEDIA QUERY */

@media screen and (max-width:700px) {
  .container{
    height: 15rem;
  }
  .container__content{
    flex-direction: column;
    text-align: center;
    h2{
      margin-bottom: 1.5rem;
    }
  }
}
`