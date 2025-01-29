import React from 'react'
import { Row, Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/footer.css'

export default function Footer() {
  return (
   <>
   {/* Footer */}
   <footer className="footer">
        <Container>
          <div className="footer-row">
            <div className="footer-col py-3">
                <h4>Our Offices</h4>
              <div className="footer-subcol">India</div>
              <div className="footer-subcol">USA 2</div>
              <div className="footer-subcol">UAE</div>
            </div>
            <div className="footer-col">
                <h4>abc@gmail.com</h4>
            </div>
          </div>
          <div className="footer-row py-3">
            <div className="footer-col">
                <div>
                Services
                    </div>
                    <div>
                Services
                    </div>  <div>
                Services
                    </div>  <div>
                Services
                    </div>  <div>
                Services
                    </div>


            </div>
            <div className="footer-col">

                <div>
                Hire Developers
                </div>
                <div>
                Hire Developers
                </div><div>
                Hire Developers
                </div><div>
                Hire Developers
                </div><div>
                Hire Developers
                </div>
                
            </div>
            <div className="footer-col">
                <div>
                Learn
                </div>
                <div>
                Learn
                </div> <div>
                Learn
                </div> <div>
                Learn
                </div> <div>
                Learn
                </div>
            </div>
            <div className="footer-col">
                <div>
                Solutions
                </div>
                <div>
                Solutions
                </div><div>
                Solutions
                </div><div>
                Solutions
                </div><div>
                Solutions
                </div><div>
                Solutions
                </div>
            </div>
          </div>
          <div className="footer-bottom py-3">
            <p>&copy; 2025 Your Website</p>
            <p>Privacy Policy</p>
          </div>
        </Container>
      </footer>
   
   </>
  )
}
