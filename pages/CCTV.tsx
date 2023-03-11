import React from 'react'
import Contact from './Components/Contact'
import ContactSection from './Components/ContactSection'
import Header from './Components/Header'
import Headings from './Components/Headings'
import TopBar from './Components/TopBar'
import Whatapp from './Components/Whatapp'

const CCTV = () => {
    return (
        <>

<TopBar/>
   <Header/>

   <Headings  head1='How' head2='Contact Us'/>
   <Contact/>
   <Headings head1="Repair" head2="CCTV"/>
            {/* <!-- main sec  --> */}
            <section className="main">



                <div className="container mt-5 mb-5">

                    <div className="row">
                        <div className="col-12"><h2 className="">CCTV Camera repair and service</h2></div>
                        <div className="col"><p>CCTV camera system is responsible for capturing visual information and transmit the data over cables to the recorder. The CCTV camera may also face issues such as fuzzy picture or low-quality images.</p></div>
                    </div>
                    <div className="row">
                        <h2>More About CCTV Camera repair and service</h2>
                        <h4>CCTV NETWORK INSPECTION & MAINTENANCE</h4>
                        <div className="col">
                            <br/>

                                Whats Included in CCTV Camera repair and service <br/>
                                    Repairing of connectors <br/>
                                        Cleaning of camera and DVR units <br />
                                        Cost of parts of replace
                                        <br />
                                        <b>Hire the Experienced and Skilled Technicians for CCTV Repair Services </b><br />
                                        Nowadays, security has become one of the major concerns. It is essential to have a strong as well as a reliable security system. CCTV camera is a device that helps to keep an eye on the activities going on at your place. Be it your home or workspace, CCTV helps in ensuring the safety of family members as well as employees. The best thing about installing a CCTV camera is that it provides you the evidence if there is some issue. However, any issue in the CCTV camera can hamper your security
                                        <br />

                                        No matter how big your problem is:
                                        <br />
                        </div>
                    </div>
                </div>


            </section>
            <ContactSection/>
            <Whatapp/>
        </>
    )
}

export default CCTV
