import React from 'react'

import logo from "../assets/images/footlogo.svg"
import Button from '../common/Button';
import facebook from "../assets/images/icon-facebook.svg"
import instagram from "../assets/images/icon-instagram.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import twitter from "../assets/images/icon-twitter.svg"
import youtube from "../assets/images/icon-youtube.svg"


const socials = [
    { name: 'Facebook', image: facebook, },
    { name: 'Twitter', image: twitter, },
    { name: 'Pinterest', image: pinterest, },
    { name: 'Instagram', image: instagram, },
    { name: 'Youtube', image: youtube, },
]

function Footer() {

    const socialRow = socials.map(social => (
        <div className="col">
            <img src={social.image} alt={social.name} />
        </div>
    ))

    return (
        <div style={{
            backgroundColor: 'hsl(233, 26%, 24%)',
        }} className="row px-5 py-5 m-0">
            <div className="col-12 col-md-3">
                <div className="row justify-content-center text-center">
                <img src={logo} alt="easybank logo" className="mb-5" />

                </div>
                <div className="row justify-content-center">

                <div style={{
                    maxWidth: '180px'
                }}  className="row mb-4" id="social_icons">
                    {socialRow}
                </div>
                </div>
               

            </div>
            <div className="text-center col-12 col-md-2">
                <p className="text-light">About</p>
                <p className="text-light">Contact</p>
                <p className="text-light">Blog</p>
            </div>
            <div className="text-center col-12 col-md-2">
                <p className="text-light">Career</p>
                <p className="text-light">Support</p>
                <p className="text-light">Privacy Policy</p>
            </div>
            {/* medium and large screen */}
            <div className="d-none d-md-flex col flex-column align-items-end">
                <Button />
                <p className="mt-5 text-muted">&copy; Easybank. All Right Reserved.</p>
            </div>
            {/* for small screen */}
            <div className="col text-center d-md-none mt-4">
                <Button />
                <p className="mt-3 text-muted">&copy; Easybank. All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
