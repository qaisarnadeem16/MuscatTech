import React from 'react'
import Contact from './Components/Contact'
import ContactSection from './Components/ContactSection'
import Header from './Components/Header'
import Headings from './Components/Headings'
import TopBar from './Components/TopBar'
import Whatapp from './Components/Whatapp'

const Refrigator = () => {
    return (
        <>

            <TopBar />
            <Header />

            <Headings head1='How' head2='Contact Us' />
            <Contact />
            <Headings head1="Repair" head2="Refrigerator"/>
            <div className="container mt-5 mb-5">
     
  <div className="row">
     <div className="col-12"><h2 className="">Refrigerator and Deep Freezer Repair</h2></div>
     <div className="col"><p>Are looking for a reliable Refrigerator Repair and Deep Freezer Repair Service? Here  professionals now.</p></div>
  </div>
  <div className="row">
    <h2>More About Refrigerator and Deep Freezer Repair</h2>
    <div className="col">
      <p> <b> Refrigerator and Deep Freezer Repair Services:</b> <br/>

        here to provide you Best Fridge, Refrigerator and Deep Freezers Repairing and Maintenance Services for Home OR for Commercial use. You can store food in it. However, if these Home Appliances become faulty. The food will be at a risk to go rotten in no time.

        To keep your food from getting worse, the Fridge, Refrigerator or Deep Freezer has to keep working round the clock. This causes some inefficiency for which Kam Kaj provides its customers the best Fridge, Refrigerator and Deep Freezer Repairing/Maintenance Services at your doorstep 
        <br/>
       <b> Common Fridge, Refrigerator and Deep Freezer Problems: </b> <br/>

        The five most widely known Fridge, Refrigerator and Deep Freezers problems are leaking water on the floor, Deep Freezer not functioning properly, frequent unit cycling, warming of fruit compartment, and building up of ice inside the refrigerator.
        
        In case any of these problems occur in your Fridge, Refrigerator and Deep Freezers, get professional help immediately. It is important not to delay Fridge, Refrigerator and Deep Freezer Repair and Maintenance Services because small ignored problems can expand and cause bigger issues, which may later become expensive.
        
        No matter what type of Fridge, Refrigerator and Deep Freezer is in your home, our in-house Fridge, Refrigerator and Deep Freezer Repairing and Maintenance Experts can get to work right away to address any problems you have with your Home Appliance.
        <br/>
       
         No matter how big your problem is:
        <br/>
        </p>
    </div>
  </div>
    


   



   </div>

            <ContactSection />
            <Whatapp />
        </>
    )
}

export default Refrigator
