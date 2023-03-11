import type { NextPage } from 'next'
import Head from 'next/head'


import styles from '../styles/Home.module.css'
import Header from './Components/Header'
import Headings from './Components/Headings'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import TopBar from './Components/TopBar'
import AboutUs from './Components/AboutUs'
import WhyChoose from './Components/WhyChoose'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'
import Whatapp from './Components/Whatapp'
import SellProducts from './Components/SellProducts'


const Home: NextPage = () => {
  return ( <>
    
  
   <TopBar/>
   <Header/>
   <HeroSection/>
   <Headings  head1='Services' head2='Our Services'/>
   <Services/>
   
   <Headings  head1='Gallery' head2='Our Work'/>
   <Gallery/>
   <Headings  head1='Available' head2='For Sell'/>
   <SellProducts/>
   <Headings  head1='About' head2='About'/>
   <AboutUs/>
   <Headings  head1='Why' head2='Choose Us'/>
   <WhyChoose/>
   <Headings  head1='How' head2='Contact Us'/>
   <Contact/>
   <Headings  head1='Contact' head2='Contact Us'/>
   <ContactSection/>
   <Footer/>
   <Whatapp/>
   </>
  )
}

export default Home
