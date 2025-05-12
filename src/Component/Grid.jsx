import React from 'react'
import "../Style/Grid.css"
import grid from "/public/images/grid.png";
import grid1 from "/public/images/gridphone.png";
import grid2 from "/public/images/gridphone1.png";
import grid3 from "/public/images/gridphone3.png";


const Grid = () => {
    return (
        <section className='grid'>
            <div className="container">
                <div className="grid-wrapper">
                    <div>
                            <div>
                                <h1><span>Team collaboration in</span>  <span>one simple place with </span> <span>privacy come first.</span></h1>
                                <p><span>Securely share and work together with Deupload’s </span><span>simple file storage and sharing, easy user </span><span>management, unlimited file size, password protected links and more.</span></p>
                                <div>
                                <button className='btn'>Getting Started</button>
                                <button className='btn'>Leran More</button>
                                </div>
                            </div>

                        <div>
                            <img className='gridImg' src={grid} alt="" />
                        </div>
                    </div>
                    

                    <div className='phone'>
                        <img src={grid1} alt="" />
                        <img src={grid2} alt="" />
                        <img src={grid3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Grid