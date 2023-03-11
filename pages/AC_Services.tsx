import React from 'react'
import Contact from './Components/Contact'
import ContactSection from './Components/ContactSection'
import Header from './Components/Header'
import Headings from './Components/Headings'
import TopBar from './Components/TopBar'
import Whatapp from './Components/Whatapp'

const AC_Services = () => {
  return (
    <>
    <TopBar/>
   <Header/>

   <Headings  head1='How' head2='Contact Us'/>
   <Contact/>
   <Headings head1="Repair" head2="Air Condition"/>
   
   {/* <!-- main sec  --> */}
 <section className="main">
   <div className="container mt-5 mb-5">
    <div className="row mt-3 mb-5">
      <h1 className="mt-3 mb-5">What do our services include?</h1>
     
    <h3 className="col-6">1. Air filter and fin cleaning</h3>
    <h3 className="col-6">2. AC condenser and evaporator coil cleaning</h3>
    <h3 className="col-6">3. AC condenser and evaporator fan cleaning</h3>
    <h3 className="col-6">4. Drain cleaning and leakage check</h3>
    <h3 className="col-6">5. Coolant level check in air conditioner</h3>
    <h3 className="col-6">6. Overall inspection of the AC unit</h3>

  </div>

    <div className="row mt-3 mb-3">
        <h3>Best ac Service & Repair In Muscat, Oman</h3>
        <p>With the increasing temperature, the need for ac service in Muscat is becoming paramount as it is in regular use. Air conditioners are a constant need in such hot and humid weather. To keep your ac from causing any discomfort to your family, you must get timely service done for your ac.</p>
    </div>

    <div className="row mt-3 mb-3">
        <h3>Why do you need an ac service & repair?</h3>
        <p>Rising pollution in the environment makes you vulnerable to breathing problems. You consider your house to be a heaven where you can breathe peacefully. However, if your ac gets blocked with soot, filth, or bacteria, it causes many health problems. Hence, you must get timely ac repair & service in Muscat. having a professional by your side leaves you tension free. Some of the best painters in Muscat are available that can enhance the complete attire of your room.</p>
    </div>

    <div className="row mt-3 mb-3">
        <h3>Why choose Quick repair Home services?</h3>
        <p>Quick repair provides ac maintenance in Oman services where our professionals serve you in ac maintenance. When your ac gives out a poor airflow, its a signal to get it repaired.
            <br/> <br/>
            Our professionals are one call away from your ac repair in Muscat. We have a committed team of professionals who are skilled in maintaining the quality of your appliances. Issues with your air conditioner can be resolved with the help of your experts. Also, we charge a very nominal price for our service. We are one of the leading agencies among the ac service agencies in Muscat.
        </p>
    </div>




   </div>

 </section>

 <Headings  head1='Contact' head2='Contact Us'/>
   <ContactSection/>
   <Whatapp/>
    </>
  )
}

export default AC_Services
