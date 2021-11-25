import React, { Component } from 'react';
import Loading from './loading.js';
import github_icon from '../img/icons/github.svg';
import linkedin_icon from '../img/icons/linkedin.svg';
import email_illustration from '../img/svg/email_figure.svg';


export default class Contact extends Component {
    render() {
        return (
            <div id="contact-content" className="h-full flex flex-col gap-8 justify-center items-center lg:justify-start lg:items-start">
                <div id="contact-frame" className="w-full gap-8 flex flex-col flex-grow justify-center items-center lg:flex-row lg:justify-start">
                    <div id="contact-send" className="w-full lg:w-auto gap-y-2 gap-x-8 flex flex-col lg:flex-grow justify-center items-center lg:flex-row lg:justify-start lg:items-start">
                        <div className="w-full flex flex-col flex-grow">
                            <h1 className="title">contact.</h1>
                            <form id="contact" method="POST" action="">
                                <div className="flex flex-col gap-y-4">
                                    <div className="flex flex-col">
                                        <label className="label-title" htmlFor="name">Name:</label>
                                        <input className="contact-input" type="text" id="name" name="name" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-title"htmlFor="email">Email:</label>
                                        <input className="contact-input" type="text" id="email" name="email" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-title" htmlFor="message">Message:</label>
                                        <textarea className="contact-input" name="message" id="message" cols="30" rows="10" placeholder="Message here..."></textarea>
                                    </div>
                                    <button className="send-button" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id='contact-media' className="w-full lg:w-2/3 flex flex-col gap-y-20 justify-start items-start">
                        <div id="contact-social-media" className="">
                            <h1 className="title">social media.</h1>
                            <div className="flex flex-row gap-2">
                                <a href="https://www.github.com/Yvson">
                                    <img className="icon-social" src={github_icon} alt="Github Icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/yvsonmoura/">
                                    <img className="icon-social" src={linkedin_icon} alt="Linkedin Icon" />
                                </a>
                                
                            </div>
                        </div>
                        <div id="contact-email" className="">
                            <h1 className="title">email.</h1>
                            <div className="flex flex-row gap-2">
                                <p className="paragraph-base">contato@yvsonmoura.com</p>
                            </div>
                        </div>
                        <div id="contact-email-svg" className="">
                            <div className="flex flex-row gap-2">
                                <img className="max-w-xs lg:max-w-md" src={email_illustration} alt="Email Illustration" />
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>
        );
    }
}


