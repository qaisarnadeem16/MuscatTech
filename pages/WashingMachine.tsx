import React from 'react'
import Contact from './Components/Contact'
import ContactSection from './Components/ContactSection'
import Header from './Components/Header'
import Headings from './Components/Headings'
import TopBar from './Components/TopBar'
import Whatapp from './Components/Whatapp'

const WashingMachine = () => {
    return (
        <>

            <TopBar />
            <Header />

            <Headings head1='How' head2='Contact Us' />
            <Contact />
            <Headings head1="Repair" head2="Washing Machine"/>
            <div className="container mt-5 mb-5">
     
  <div className="row">
     <div className="col-12"><h2 className="">Washing Machine Repair</h2></div>
     <div className="col"><p>We know that even the smallest issue with a home appliance like a washing machine can cause major issues in your home life. An appliance such as a washing machine deserves care and attention. Dont wait too long, contact Quick Repair right now.</p></div>
  </div>
  <div className="row">
    <h2>More About Washing Machine Repair</h2>
    <div className="col">
      <p> <b> Professional Washing Machine Installation & Washing Machine Repair Services:</b> <br/>

        The Washing Machine is one such technological wonder that has made our lives easier and hassle-free but we often neglect it until it breaks down and leaves us with loads of laundry.
        <br/>
        There are three types of Washing Machines Manual, Semi-Automatic, and Automatic. Common Washing Machine problems can range from leaking water to improper draining and failure to spin. Dont ignore the signs that something is wrong with your washing machine. To solve and diagnose a variety of washing machine-related issues you can always rely on Kam Kaj.
        <br/>
        Our In-house Washing Machine Maintenance Team of Technicians can Repair and provide Services to all Brands of Washing Machines. Whether it is Front-loading, Top-load, Automatic, or Portable Washing Machines. 
        <br/>
        Quick repair will get your Washing Machine back in a working state in no time. Our Trained In-house Washing Machine Repair Technicians can provide Washing Machine Repair Services within few clicks.
        <br/>
         No matter how big your problem is:
        <br/>
        <b> If it is youre washing that is not stirring.  <br/>
        The drum that does not drain  <br/>
        Too much foam in the washing machine  <br/>
        Jammed door or noise in the washing machine.</b>  <br/>
        Quick repair Washing Machine Repairing Professionals are capable of solving any issue minor to major regarding your Washing Machine</p>
    </div>
  </div>
   </div>

            <ContactSection />
            <Whatapp />
        </>
    )
}

export default WashingMachine
