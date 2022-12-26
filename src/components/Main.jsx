import styled from 'styled-components'
const Main = () => {
  return (
    <Mainstyle>
      <div className="container">
        <div className="container__about">
            <h1>What's different about Manage?</h1>
            <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </div>
        <div className="container__list">
        <div className='list'> 
        <h2><span>01</span> Track company-wide progress</h2>
        <p>see how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
        </div>
        <div className='list'> 
        <h2> <span>02</span> Advanced built-in reports</h2>
        <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
        </div>
        <div className='list'> 
        <h2><span>03</span> Everything you need in one place</h2>
        <p>Stop jumping from one service to another to communicate, store files, track tasks and share douments. Manage offers an all-in-one team productivity solution.</p>
        </div>

        </div>
      </div>
    </Mainstyle>
  )
}

export default Main

const Mainstyle = styled.div`
width: 80%;
margin: auto;
.container{

    margin-top: 5rem;
    display: grid;
    grid-template-columns: 45% 52%;
    gap: 3%;
    margin-bottom: 3rem;
}
.container__about{
    h1{
        margin-bottom: 2rem;
        color: var(--Dark-Blue);
        /* font-size: 1.9rem; */
    }
    p{
        line-height: 1.5;
        /* color: var(--Dark-Grayish-Blue); */
        color: hsl(227, 12%, 61%);
        max-width: 330px;
    }
}
.container__list{
    h2{
        margin-bottom: 2rem;
        font-size: 18px;
        color: var(--Dark-Blue);
        span{
            background-color: var(--bright-red);
            padding: 0.4rem 1rem;
            border-radius: 1rem;
            font-size: 16px;
            margin-right: 1.5rem;
            color: #fff;
        }
    }
    p{
        line-height: 1.5;
        color: hsl(227, 12%, 61%);
        padding-left: 5rem;
    }
    .list{
        margin-bottom: 1rem;
    }
}

/* MEDIA QUERY */
@media screen and (max-width:914px) {
    .container{
        grid-template-columns: 1fr;
        gap: 5rem;
    }
}
@media screen and (max-width:500px) {
    .container{
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    .container__about{
        text-align: center;
        p{
            max-width: unset;
        }
    }
    .container__list{
        p{
            padding: 0;
            font-size: 0.9rem;
        }
        h2{
            padding: 0.4rem 0.1rem 0.4rem 0rem;
            background-color: #f4d8d1;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            border-radius: 1rem;
            span{
                margin-right: 0.3rem;
            }
        }
        .list{
            margin-bottom:2.3rem;
            
        }
    }
}
`