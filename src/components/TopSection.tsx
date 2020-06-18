import React from 'react';
import Button from '../common/Button';

import backImg from "../assets/images/bg-intro-desktop.svg"
import phones from "../assets/images/image-mockups.png"




const uspArr = [
    { id: 1, image: backImg, title: "Online Banking", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum quibusdam at ut voluptatibus consequuntur dolorum sed dignissimos autem, commodi, pariatur esse iure. Natus dolore esse ipsum. Alias, ut impedit." },
    { id: 2, image: backImg, title: "Simple Budgetting", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum quibusdam at ut voluptatibus consequuntur dolorum sed dignissimos autem, commodi, pariatur esse iure. Natus dolore esse ipsum. Alias, ut impedit." },
    { id: 3, image: backImg, title: "Fast Onboarding", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum quibusdam at ut voluptatibus consequuntur dolorum sed dignissimos autem, commodi, pariatur esse iure. Natus dolore esse ipsum. Alias, ut impedit." },
    { id: 4, image: backImg, title: "Open API", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum quibusdam at ut voluptatibus consequuntur dolorum sed dignissimos autem, commodi, pariatur esse iure. Natus dolore esse ipsum. Alias, ut impedit." },

]

function TopSection() {
    return (
        <div id="topSection" >
            <div className="row bg-light m-0" style={{ minHeight: '400px',
            backgroundColor: 'rgb(235, 240, 245)'
         }}>
                <div className="col-12 col-md-5 justify-content-center align-items-center d-flex p-5" style={{ minHeight: '400px' }}>
                    <section className="p-5"> 
                        <h4>Next generation <br /> digital banking </h4>

                        <p>
                            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.
                </p>
                        <Button />
                    </section>

                </div>
                <div style={{
                    backgroundImage: `url(${backImg})`,
                    minHeight: '200px',
                    width: '70%',
                    height: '90vh',
                }} className="col-12 col-md-7">
                    <img style={{ width: '70%', float: 'right' }} src={phones} alt="track record" />
                </div>

            </div>
            <div className="w-100" style={{ padding: '70px', backgroundColor: 'rgb(234, 236, 241)' }}>
                <h1>Why choose Easybank?</h1>
                <p className="my-0 py-0">We leverage Open Banking to turn your account into your financial hub. </p>
                <p className="my-0 py-0">Control your finances like never before</p>
                
                <section className="row mt-5">
                    {uspArr.map(({id, image, title, description }) => (
                        <div className="col-12 col-md-4" style={{
                            maxWidth: 250
                        }}>
                            <img className="img-rounded pb-4" width={40} src={image} alt="ups icon" />
                            <h5>{title}</h5>
                            <p className="text-justify">{description}</p>
                        </div>

                    ))}

                </section>
            </div>

        </div>

    )
}

export default TopSection
