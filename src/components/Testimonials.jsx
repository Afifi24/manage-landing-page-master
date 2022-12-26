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
 }
.card{
  background-color: var(--Vary-Light-Gray);
  min-width: 500px;
  text-align: center;
  padding: 2rem 1.27rem;
  position: relative;
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
/* medai query */
@media screen and (max-width:900px) {
  .card{
    max-width: 400px;  }
}
`