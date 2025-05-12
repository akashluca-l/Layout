import React from 'react'
import "../Style/Ipfswork.css"
import ipfsDiagram from "/public/images/data.png";

const Ipfswork = () => {
    return (
        <section className="ipfs">
            <div className="container">
                <div className="ipfs-wrapper">
                    <div>
                        <h1>How IPFS works?</h1>
                        <p>
                            When you add a file to IPFS, your file is split into smaller chunks, cryptographically hashed, and given a unique fingerprint called a content identifier (CID). This CID acts as a permanent record of your file as it exists at that point in time. However, this doesn't mean you need to remember a long string of CIDs to access files. Deupload can be used to map CIDs to human-readable DNS names.
                        </p>
                        <div>
                            <button>Learn more IPFS</button>
                            <button>About Sia network</button>
                        </div>
                    </div>

                    <div>
                        <img className="ipfs-image" src={ipfsDiagram}  alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ipfswork