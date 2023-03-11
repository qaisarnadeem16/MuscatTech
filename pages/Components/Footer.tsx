import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="footer-section mt-5" id='Footer'>
      <div className="container">
        
       
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
            
                  <div className="col-md-4 mb-30">
                      <div className="single-cta">
                          <i className="bi bi-geo-alt-fill"></i>
                          <div className="cta-text">
                              <h4>Find us</h4>
                              <span>Mascat Oman</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-30">
                      <div className="single-cta">
                          <i className="bi bi-telephone-fill"></i>
                          <div className="cta-text">
                              <h4>Call us</h4>
                              <span>  +968 9760 4222</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-30">
                      <div className="single-cta">
                          <i className="bi bi-envelope-at"></i>
                          <div className="cta-text">
                              <h4>Mail us</h4>
                              <span>ilyasb252@gmail.com</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer-content pt-5 pb-5">
               <div className="row"> 
                  <div className="col-md-6 mb-50">
                      <div className="footer-widget">
                          <div className="footer-logo">
                              <a href="index.html"></a>
                          </div>
                          <div className="footer-text">
                              <p>Welcome JASIM Al Jomah LLC
                                🏫🛠HOME SERVICE 🛠🕌
                           1.We are repairing installing servicing shifting all type Air conditions.
                           2.we are repairing all type refrigerators,freezers, water coolers.
                           3.we are repairing all kind of full automatic and normal washing machines,dryers and dish washer. 
                           4.we are repairing service cooking range, firon all type.
                           5.we are installing CCTV, biometric fingerprint mashine, networking, wifi range extender ,new WiFi connecti</p>
                          </div>
                          <div className="footer-social-icon">
                              <span>Follow us</span>
                              <Link href="https://www.facebook.com/actechnicain.milyas"><i className="bi bi-facebook"></i></Link>
                          
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 mb-5">
                      <div className="footer-widget">
                          <div className="footer-widget-heading">
                              <h3 className="m-5">Useful Links</h3>
                          </div>
                          <ul>
                              <li><Link href="#home">Home</Link></li>
                              <li><Link href="#about">about</Link></li>
                              <li><Link href="#services">services</Link></li>
                              <li><Link href="#contact">Contact</Link></li>
                            
                             
                          </ul>
                      </div>
                  </div>
                 
              </div> 
          </div>
      </div>
      {/* <div className="copyright-area">
          <div className="container">
              <div className="row">
                  <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                      <div className="copyright-text">
                          <p>Copyright @ Qasiar 2022</p>
                      </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    
                  </div>
              </div>
          </div> */}
      
  </footer>

    </>
  )
}

export default Footer
