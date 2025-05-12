import React from 'react'
import "../Style/Footer.css"
import footerImage from "/public/images/footerImage.png";
import socialIcon from "/public/images/SocialIcons.png";

const Footer = () => {
  return (
    <section className='Footer'>
      <div className="container">
        <div className="footer-wrapper">
          <div>
                <h2>What is Deupload?</h2>
                  <p>
                  Deupload is a cloud storage services based on Blockchain and Web3 technology, designed to help teams collaborate and file sharing in a completely private like never before.
                  </p>
                  
                    <img src={footerImage} alt="" />
                  
         
          </div>


          <div className='products'>
          <div>
            <h2>Products</h2>
            <a href="">Features</a>
            <a href="">Solutions</a>
            <a href="">Pricing</a>
            <a href="">Tecken</a>
          </div>

          <div>
            <h2>Resource</h2>
            <a href="">White Paper</a>
            <a href="">Developer</a>
            <a href="">Brand kits </a>
            <a href="">Complience</a>
          </div>

          <div>
            <h2>Community</h2>
            <a href="">Guide</a>
            <a href="">Build</a>
            <a href="">FAQs</a>
            <a href="">Forum</a>
          </div>
          </div>
          <div>
          </div>
        </div>
        <div className='copy'>
            <div>
            <span>  © 2022 Deupload. Powered by Conikal LLC</span>
            </div>

            <div>
                <img src={socialIcon} alt="" />
            </div>
          </div>
      </div>
    </section>
  )
}

export default Footer