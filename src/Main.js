import React from 'react';

function Main() {
    var myCountry = "Nigeria"
    return(
   <main>
    <section>
        <h2>About Us</h2>
        <p>
            We are a small team of web developers based in the {myCountry}.
             We specialise in creating modern websites for business and individuals.

        </p>
    </section>
    <h2>
        Our Services
    </h2>
    <section>
    <ul>
        <li>Web Design</li>
        <li>Web development</li>
        <li>E-commerce Solutions</li>
        <li>Search Engine Optimization (SEO)</li>
    </ul>
    </section>
   </main>
    );
}


export default Main;