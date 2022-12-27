import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import dental from '../../../src/pictures/village-dental-dentists.jpg';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Servicing from '../Services/Servicing';
import Quote from '../Quote/Quote';
import About from '../About/About';
import Footer from '../Footer/Footer';
import ReviewContainer from '../Review/ReviewContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            {/* <Servicing></Servicing> */}
            <ReviewContainer></ReviewContainer>
            <About></About>
            <Quote></Quote>
            <Footer></Footer>
        </div>
    );
};

export default Home;