import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'

function TopBar() {
  return (
    <>
     <Container fluid className="container-fluid topbar">
        <Row>
          
          <Col md={6}>
            <ul className="nav">
              <li className="nav-item"><a href="" className="nav-link">
              <i className="bi bi-geo-alt-fill"></i> &nbsp;Address : Muscat Oman
                </a></li>
              <li className="nav-item"><a href="" className="nav-link">
                  <i className="bi bi-telephone-fill" aria-hidden="true"></i> &nbsp; Phone :+968 9760 4222 ||&nbsp;+968 7155 2453
                </a></li>
            </ul>
          </Col>
          <Col md={6}>
            <ul className="nav socialIcon">
              <li className="nav-item"><a href="https://www.facebook.com/actechnicain.milyas" className="nav-link"><i className="bi bi-facebook"></i></a></li>
              <li className="nav-item"><a href="https://api.whatsapp.com/message/Z6KLC7AO36AHA1?autoload=1&app_absent=0" className="nav-link"><i className="bi bi-whatsapp"></i></a></li>
              <li className="nav-item"><a href="https://www.facebook.com/actechnicain.milyas" className="nav-link"><i className="bi bi-instagram"></i></a></li>
            
              <li className="nav-item"><a href="https://www.tiktok.com/@ac.technician.muscat?_r=1&_d=di1mad05kjb1fd&language=en&sec_uid=MS4wLjABAAAATtvKRQ-hhUuCfhKD5fksC18grDPsXO_nTJ9NUrfW5D4z4Zd9PcHZlNs_BtdQfOGJ&share_author_id=6948819022193460230&source=h5_m&u_code=di1mab3765gmhj&timestamp=1661968677&user_id=6948819022193460230&sec_user_id=MS4wLjABAAAATtvKRQ-hhUuCfhKD5fksC18grDPsXO_nTJ9NUrfW5D4z4Zd9PcHZlNs_BtdQfOGJ&utm_source=whatsapp&utm_campaign=client_share&utm_medium=android&share_iid=7137878162139399938&share_link_id=df71672f-e1ee-42ac-9a34-544d37640b4d&share_app_id=1233&ugbiz_name=Account" className="nav-link"><i className="bi bi-tiktok"></i></a></li>
            </ul>
          </Col>
        </Row>
      </Container>

    </>
  )
}
export default TopBar
