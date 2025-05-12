import React from 'react'
import Sections from '../Component/Sections';
import Seprate from '../Component/Seprate';
import Ipfswork from '../Component/Ipfswork';
import Variation from '../Component/Variation';
import Footer from '../Component/Footer';
import Account from '../Component/Account';
import Grid from '../Component/Grid';
import Centerbox from '../Component/Centerbox';
import Optimization from '../Component/Optimization';
import HeaderPage from '../Component/HeaderPage';

const HomeScreen = () => {
    return (
        <div>

            <HeaderPage />
            <Sections />
            <Seprate />
            <Ipfswork />
            <Variation />
            <Centerbox />
            <Grid />
            <Account />
            <Optimization />
            <Footer />


        </div>
    )
}

export default HomeScreen