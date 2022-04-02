import React, { useEffect, useState } from 'react';
import AboutSection from '../component/AboutSection';
import { About } from '../data/InfoData';
import styled from 'styled-components';
import HashLoader from "react-spinners/HashLoader";
import IEEElogo from '../images/aboutsection/IEEE DYPIEMR LOGO.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Faculty from '../component/about/Faculty';
import { BoardFaculty } from '../data/Board';

const LoadingScreen = styled.div`
  
    width:100vw;
    height:100vh;
    background-color:#000;
    position:absolute;
    z-index:1000;
    top:0;
    left:0;
    display:grid;
    place-items:center
`



const AboutIEEE = styled.div`
    margin:2rem 1rem;
    height:100%;
    width:100%;
    padding:3rem 6rem;
    display:flex;
    flex-direction:row;
    @media screen and (max-width:500px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:0;
        margin:0;
        width:80%;
        
    }


`;
const LogoIEEE = styled.div`
  background-color:#000;
  display:flex;
  width:30vw;
  height:100%;
  padding:3rem;

  align-self:center;
  justify-self:center;
  img{
      background-color:#000;
      object-fit:cover;
      height:100%;
      width:100%;
  }
  @media screen and (max-width:500px){
      width:100%;
      height:100%;
      padding:1rem;
      background-color:transparent;
      img{
        width:90%
      }
  }
  
`;
const AboutContent = styled.div`
  color:#712669;
  margin-left:3rem;
  padding:3rem;
  width:80vw;

  background-color:#19338F;
  display:flex;
  color:white;
  align-items:center;
  justify-content:center;  
  text-align:left;
  font-family: Montserrat;
  line-height:25px;
    font-weight: 500;
    font-size: 18px;
    @media screen and (max-width:500px){
        font-size:10px;
        width:80%;
        padding:1rem;
    }
`;

const AboutSectionMain = styled.div`
 height:100%;
 width:100vw;
 .aboutheading{
     margin-top:2rem;
     font-size:2.5rem;
     text-align:center;

     @media screen and (max-width:500px){
         font-size:15px;
         margin:2rem 0;
     }
 }
 .entertext{
     @media screen and (max-width:500px){
         font-size:2rem;
     }
 }
 @media screen and  (max-width:450px){
     width:100%;
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center
 }
 
`

const AboutPage = () => {
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 600)
        Aos.init({ duration: 1000 })

    }, [])

    return <>
        {
            loading ? <LoadingScreen>
                <HashLoader color={'#19FC30'}
                    loading={loading}
                    size={150} />
            </LoadingScreen> :
                <AboutSectionMain>
                    <div style={{
                        position: 'relative',
                        top: "0",
                        color: '#19FC30',
                        height: '100vh',
                        width: '100vw',
                        backgroundColor: "#000"

                    }}>
                        <h2 data-aos='fade-up'
                            className='entertext'
                            style={{
                                height: '100%',
                                display: "grid",
                                placeItems: 'center',
                                fontSize: '5rem',
                                textAlign: 'center'
                            }}>About Us</h2>
                    </div>
                    <h1 data-aos='fade-down' className='aboutheading'>IEEE DYPIEMR STUDENT BRANCH</h1>

                    <AboutIEEE >
                        <LogoIEEE data-aos='fade-right'>
                            <img src={IEEElogo} alt='logo' />
                        </LogoIEEE>
                        <AboutContent data-aos='fade-left'>
                            <p>The Main Aim of IEEE DYPIEMR is to strive to be connected in the world of technology, to encourage students to grow knowledge about the latest industrial science to be able to achieve his/her career in the core domain.
                            </p>
                        </AboutContent>
                    </AboutIEEE>

                    <AboutSection  {...About} />
                    <Faculty faculty={BoardFaculty} />
                </AboutSectionMain>
        }
    </>;
};

export default AboutPage;
