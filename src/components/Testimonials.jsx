import {useRef,useState,useEffect} from 'react'
import styled from 'styled-components'
import {Data} from '../data'
import {motion} from 'framer-motion'
const Testimonials = () => {
const [width,setWidth] = useState(0)
const innerTesimonial = useRef()
useEffect(()=>{
  console.log(innerTesimonial.current.scrollWidth)
  console.log(innerTesimonial.current.offsetWidth)
  setWidth(innerTesimonial.current.scrollWidth-innerTesimonial.current.offsetWidth)
},[])
  return (
    <Testimonialstyle>
    <div className="container">
      <h2>What they've said</h2>


      <motion.div className="testimonial">
            <motion.div ref={innerTesimonial} className="inner-testimonial" dragConstraints ={{right:0,left:-width}} drag='x' >
            {Data.map((item)=>{
              return(
                <motion.div className='card' key={item.title}>
                  <img src={item.image} alt="" />
                   <h3>{item.title}</h3>
                   <p>{item.desc}</p>
                </motion.div>
              )
            })}
            </motion.div>
      </motion.div>
      <div className="container__dots">
        {Array.from({length:4}).map((item,index)=>(
          <div className="dot"></div>
        ))}
      </div>
        <div className="btn"> <button className="Get-started-btn">Get Started</button></div>

    </div>

    </Testimonialstyle>
  )
}

export default Testimonials

const Testimonialstyle = styled.div`
margin-top: 7rem;
margin-bottom: 5rem;
 .container{
  
  h2{
  text-align:center;
  margin-bottom: 3rem;
  color: var(--Dark-Blue);
 }
 }
 .testimonial{
   cursor: grab;
   overflow: hidden;
   margin-bottom: 3rem;
 }
 .inner-testimonial{
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  padding-bottom:1rem;
 }
.card{
  background-color: var(--Vary-Light-Gray);
 min-width: 450px;
  text-align: center;
  padding: 2rem 1.27rem;
  position: relative;
  box-shadow: 2px 2px 20px rgba(0,0,0,0.1);

  /* width: 700px; */
  h3{
    margin-bottom: 1rem;
    color:var(--Dark-Blue);
  }
  p{
    line-height: 1.5;
    color: var(--Dark-Grayish-Blue);
  }
  img{
    position: absolute;
    top: -1.5rem;
    left: 45%;
    width: 3rem;
    height: 3rem;
    pointer-events: none;
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
.btn{
  text-align: center;
}
.container__dots{
  display: none;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
 
}
.dot{
  height: 10px;
  width: 10px;
  border: 1px solid var(--bright-red);
  border-radius: 50%;
}
/* medai query */
@media screen and (max-width:900px) {
  .card{
    min-width:400px ;
  }
}
@media screen and (max-width:500px) {
  .card{
    min-width:330px ;
    
  }
  .container__dots{
    display: flex;
  }
  .dot:nth-last-child(){
    background-color:red;
  }
}
`