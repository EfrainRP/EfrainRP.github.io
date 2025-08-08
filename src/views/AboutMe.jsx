import React from 'react';
import Hero from '../component/Hero.jsx';
import About from '../component/About.jsx';
import Layout from '../Layout.jsx';
import Tecnologies from '../component/Tecnologies.jsx';

export default function Start() {
    return (
        <Layout>
            <Hero />
            <About />
            <Tecnologies/>
        </Layout>
    );
}