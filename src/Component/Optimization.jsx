import React from 'react'
import "../Style/Optimization.css"
import optimization1 from "/public/images/optimization1.png";
import optimization2 from "/public/images/a.png";


const Optimization = () => {
    return (
        <section className='optimization'>
            <div className="container">
                <div className="optimization-wrapper">
                    <h1>Unleash Unprecedented Speed</h1>
                    <p><span>With 200+ server locations worldwide, our built-in CDN (content delivery network) ensures your</span> <span>content is served with lightning speed, surpassing even the loading time of a YouTube video.</span></p>
<div>
<div>
                        <h1>Video Optimization</h1>
                        <p>Empower your audience to experience your videos exactly as intended. With built-in video optimization, you can effortlessly serve the best video format and size for your content.</p>
                        <img className='optiImage' src={optimization1} alt="" />
                    </div>


                    <div>
                        <h1>Image Optimization</h1>
                        <p>Say goodbye to image quality compromises. With Deupload's image optimization, you can trust that your images will always be of the highest quality, ready to be shared and viewed instantly.</p>
                        <img className='optiImage' src={optimization2} alt="" />
                    </div>
</div>
                </div>
            </div>
        </section>
    )
}

export default Optimization