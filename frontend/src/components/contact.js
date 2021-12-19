import React, { Component, useRef } from 'react';
import github_icon from '../img/icons/github.svg';
import linkedin_icon from '../img/icons/linkedin.svg';
import email_illustration from '../img/svg/email_figure.svg';
import yvsonmoura_logo from '../img/svg/yvsonmoura_logo.svg';


const axios = require('axios').default;

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'status': '',
        }
        this.contactForm = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let contactForm = this.contactForm.current;
        let formData = new FormData(contactForm);
        let updateStatus = (status) => {
            this.setState({
                'status': status,
            });
        }

        updateStatus('Sending...');
        axios.post('', formData, {
            headers: {
                'X-CSRFToken': window.data.csrf_token,
            }
        }).then((response) => {
            if (response.data.status === 'Message Sent!') {
                updateStatus('Message Sent!')
            }
            contactForm.reset();
          })
          .catch(function (error) {
                updateStatus('Error!')
          });
    }

    render() {

        const status = this.state.status;
        let sentResponse;

        const responseStatus = () => {
            switch (status) {
                case 'Sending...':
                    sentResponse = <p className="status-contact">{this.state.status}</p>;
                    break;
                case 'Message Sent!':
                    sentResponse = <p className="status-contact">{this.state.status}</p>;
                    return (
                        <div>
                            <svg className="px-2 h-12 w-12 fill-current text-black dark:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.59 5.58L8 12.17L4.41 8.59L3 10L8 15L16 7L14.59 5.58ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"/>
                            </svg>
                            
                        </div>);
                case 'Error!':
                    sentResponse = <p className="status-contact text-red-700">{this.state.status}</p>;
                    return (
                        <div>
                            <svg className="px-2 h-12 w-12 fill-current text-red-700" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"/>
                            </svg>
                        </div>);
                default:
                    return '';
            }
        }
         

        return (
            <div id="contact-content" className="h-full flex flex-col gap-8 justify-center items-center lg:justify-start lg:items-start">
                <div id="contact-frame" className="w-full gap-8 flex flex-col flex-grow justify-center items-center lg:flex-row lg:justify-start">
                    <div id="contact-send" className="w-full lg:w-auto gap-y-2 gap-x-8 flex flex-col lg:flex-grow justify-center items-center lg:flex-row lg:justify-start lg:items-start">
                        <div className="w-full flex flex-col flex-grow">
                            <h1 className="title">contact.</h1>
                            <form id="contact" method="POST" action="" onSubmit={this.handleSubmit} ref={this.contactForm}>
                                <div className="flex flex-col gap-y-4">
                                    <div className="flex flex-col">
                                        <label className="label-title" htmlFor="name">Name:</label>
                                        <input className="contact-input" type="text" id="name" name="name" required/>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-title"htmlFor="email">Email:</label>
                                        <input className="contact-input" type="text" id="email" name="email" required/>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="label-title" htmlFor="message">Message:</label>
                                        <textarea className="contact-input" name="message" id="message" cols="30" rows="10" placeholder="Message here..." required></textarea>
                                    </div>
                                    <button className="send-button" type="submit">Send</button>
                                </div>
                            </form>
                            <div className="py-4 flex flex-row justify-start items-center">
                                {responseStatus()}
                                {sentResponse}
                            </div>
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
                                <p className="paragraph-base">yvson@yvsonmoura.com</p>
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


