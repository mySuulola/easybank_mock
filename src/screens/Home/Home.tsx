import React from 'react'

import './Home.css'
import TopSection from '../../components/TopSection';
import Navbar from '../../components/Navbar';
import ArticleSection from '../../components/ArticleSection';
import Footer from '../../components/Footer';

const Home: React.FC = () => {

    return (
        <div className="container-fluid m-0 p-0">
           <Navbar />
           <TopSection />
           <ArticleSection />
           <Footer />
        </div>
    );

}


export default Home;