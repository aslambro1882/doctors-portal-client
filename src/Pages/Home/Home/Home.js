import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactUS from '../ContactUS/ContactUS';
import Doctors from '../Doctors/Doctors';
import Exceptional from '../Exceptional/Exceptional';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
            <ContactUS></ContactUS>
            <Footer></Footer>
        </div>
    );
};

export default Home;