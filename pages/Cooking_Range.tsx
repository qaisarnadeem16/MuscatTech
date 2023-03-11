import React from 'react'
import Contact from './Components/Contact'
import ContactSection from './Components/ContactSection'
import Header from './Components/Header'
import Headings from './Components/Headings'
import TopBar from './Components/TopBar'
import Whatapp from './Components/Whatapp'

const Cooking_Range = () => {
    return (
        <>

<TopBar/>
   <Header/>

   <Headings  head1='How' head2='Contact Us'/>
   <Contact/>
   <Headings head1="Repair" head2="Cooking Range"/>
   <div className="container mt-5 mb-5">
     
     <div className="row">
        <div className="col-12"><h2 className="">Repairings Cooking Range</h2></div>
        <div className="col"><p>Are looking for a Repairings Cooking Range Service? Hire  professionals now.</p></div>
     </div>
     <div className="row">
       <h2>More About Repairings Cooking Range</h2>
       <div className="col">
           Cooking range and appliances are the essentials of a kitchen, whether it is in a house or at a commercial place like a restaurant or cafe. The modern conveniences of a kitchen include a gas stove, microwave oven, electric stove, induction, dishwasher, cookers, etc. If any of these kitchen essentials breaks down, stops working, or doesn’t work efficiently, your cooking experience no longer remains enjoyable
           <br/>
       
          we have a team of experienced and professional technicians for cooking range and kitchen appliance repairing. These experts reach your home to identify the issue quickly and fix all sorts of potential issues professionally and hygienically.
   
          Our technicians are aware of the most common issues that can occur. Hence, they take only a little time to fix things. During COVID-19, the technicians follow all the safety measures, like wearing a mask, sanitizing hands, etc. 
           <br/>
          
            No matter how big your problem is:
           <br/>
           
       </div>
     </div>
       
   
   
      
   
   
   
      </div>
            <ContactSection/>
            <Whatapp/>
        </>
    )
}

export default Cooking_Range
