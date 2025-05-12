    import React from 'react'
    import "../Style/Account.css"

    const Account = () => {
        return (
            <section className='acount'>
                <div className="container">
                    <div className="account-wrapper">
                        <div>
                            <h1>Ready to get started?</h1>
                            <p><span>The IPFS file storage and shring with collaboration solution that suits any industry and</span> <span>business size.</span></p>
                        </div>

                        <div>
                            <div>
                                <img src=""/>
                                <h3>Are you individual?</h3>
                                <p>Keep everything that’s important to you and your family shareable and safe in one place.</p>
                            </div>
                            <div>
                                <img src="#" alt="" />
                                <h3>
                                    Are you business?
                                </h3>
                                <p>Work efficiently with teammates and clients, stay in sync on projects and keep company data safe.</p>
                                <a href="">See more pricing</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }

    export default Account