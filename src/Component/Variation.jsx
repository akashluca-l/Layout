import React from 'react'
import "../Style/Variation.css"
import variationImage1  from "/public/images/variationImage1.png";
import variationImage2  from "/public/images/variationImage2.png";

const Variation = () => {
  return (
    <section className="variation">
            <div className="container">
                <div className="variation-wrapper">
                    <div>
                        <h1>File Sharing</h1>
                        <p>Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats.</p>
                        <img className='variationimage' src={variationImage1} alt="" />
                    </div>


                    <div>
                    <h1>Collect Files</h1>
                    <p>You can collect and receive files in a secure environment, even if the other person doesn’t have a Deupload account.</p>
                        <img className='variationimage' src={variationImage2} alt="" />
                    </div>
                </div>
            </div>
    </section>
)
}

export default Variation