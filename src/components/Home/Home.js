import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Quote from '../Quote/Quote';
import Footer from '../Footer/Footer';
import ReviewContainer from '../Review/ReviewContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            {/* <Servicing></Servicing> */}
            <ReviewContainer></ReviewContainer>
            <Quote></Quote>
            <Footer></Footer>
        </div>
    );
};

export default Home;