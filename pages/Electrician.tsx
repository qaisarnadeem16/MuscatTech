import React from 'react'
import Contact from './Components/Contact'
import ContactSection from './Components/ContactSection'
import Header from './Components/Header'
import Headings from './Components/Headings'
import TopBar from './Components/TopBar'
import Whatapp from './Components/Whatapp'

const Electrician = () => {
    return (
        <>

            <TopBar />
            <Header />

            <Headings head1='How' head2='Contact Us' />
            <Contact />
            <Headings head1="" head2="Electrician"/>
            <div className="container mt-5 mb-5">
     
     <div className="row">
        
        <div className="col"><p>Electrical repairs involve a wide variety of services, ranging from major installation, or rewiring your home, to changing over a broken socket or breaker. It is often a difficult task to diagnose a particular electrical issue at home without the help of a trained professional.</p></div>
     </div>
     <div className="row">
       {/* <h2>More About CCTV Camera repair and service</h2> */}
       <div className="col">
         <p> <b>Ceiling Fan Installation & Repair</b> <br/>
           Not only the fans add a beautiful aesthetic touch to your rooms but provide air circulation which is very important in scorching hot days of summer.<br/>
           
           WE provides you with the fastest and efficient ceiling fan installation service so that your fan is running in just no time. Our take extra precautionary measures to ensure that the ceiling fan is installed properly for the optimal environment.<br/>
           
           Furthermore, installing fans on your own can be a very risky business, hence you should just leave it on our  by giving us a call.<br/>
           
       <b>LED TV / LCD Mounting Services</b><br/>
            has long years of experience in installing or mounting LED TVs at home. We guarantee you a clean installation with the highest quality of materials. Our  work hard at their job and they care about making our customers happy, hence your satisfaction is a top priority for us.<br/>
           
            comes with a guarantee to handle your TV safely and installed properly so you can enjoy all your favorite content on it. If you want the best LED TV/LCD Mounting Services in town then you should give us a call. You will not only benefit from our amazing services but also our amazing prices too.<br/>
           
           <b>UPS installation and Repairing Services</b><br/>
           Having a UPS is certainly a necessity in our country and we dont want you to suffer during load shedding. Our professional UPS installation and repair services provide you with ease and seamless experience.
           
           You can rely on our  who will be at your doorstep in no time and will install or repair your UPS to make it up and running.
           <br/>
           Installing a UPS can go wrong in so many ways, hence you should always trust a professional who has extensive experience to provide you with a stress-free UPS installation job.
           <br/>
       <b>Water Pump Repairing Services</b><br/>
           offers you efficient water pump repairing services that not only save a lot of your time of the day, but you get to experience some amazing rates too. Our amazing services have earned some great reviews and you will be giving us a great review too.<br/>
           
           So, if you are looking for an electrician who knows what he is doing while repairing your water pump, you should not hesitate to give us a call for a quick job <br/>
           
          <b> Water Tank Automatic Switch Installation</b><br/>
           We offer water tank automatic switch installation services to you at the best affordable rates. We know it can be a hassle to find the right professional who would cleanly do the job, hence we provide you with our who do a neat job.<br/>
           
           You can always give us a call for all your electrical services jobs and we will do it in no time. we value our customers and their feedback, hence our  do the jobs the way our customers recommend most efficiently</p>
           
       </div>
     </div>
       
   
   
      
   
   
   
      </div>

            <ContactSection />
            <Whatapp />
        </>
    )
}

export default Electrician
