import React, { Component } from 'react';
import profile from '../img/avatar/profile.png';
import github_icon from '../img/icons/github.svg';
import whatsapp_icon from '../img/icons/whatsapp.svg';
import linkedin_icon from '../img/icons/linkedin.svg';

export default class Home extends Component {
    render() {
        return (
            <div id="content" className="h-full flex flex-col flex-grow gap-4 justify-between lg:flex-row lg:justify-evenly lg:items-center">
                <div id="profile-info" className="gap-y-2 flex flex-col justify-center items-center">
                    <img className="max-w-xs lg:w-auto lg:max-w-sm rounded-full border-8 border-gray-100 dark:border-gray-800" src={profile} alt="Profile" />
                    <h1 className="font-title font-bold text-4xl dark:text-white">Yvson Moura</h1>
                    <h3 className="paragraph-xl">Fullstack Developer</h3>
                    <h4 className="paragraph-sm">Brasil</h4>
                    <div className="pt-4 flex flex-row gap-4">
                        <img className="icon-social" src={github_icon} alt="Github Profile" />
                        <img className="icon-social" src={linkedin_icon} alt="Linkedin Profile" />
                        <img className="icon-social" src={whatsapp_icon} alt="Whatsapp Profile" />
                    </div>

                </div>

                <div className="max-w-4xl space-y-12 flex-grow">
                    <div >
                        <h1 className="title">perfil.</h1>
                        <p className="paragraph-base text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus accumsan mi vel tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut auctor lectus elit, non luctus tortor ornare vitae. Nullam rutrum mi sit amet sapien placerat, non pretium sem sodales. Curabitur eget diam sodales, accumsan sem sit amet, feugiat odio. Suspendisse id odio in dolor fermentum egestas nec in nisi. Donec molestie blandit rutrum. Sed eleifend sit amet odio et maximus. Aliquam vestibulum orci quis lacinia volutpat. Ut ultricies fermentum eros ac scelerisque. Nam mollis, leo sed lacinia fringilla, ligula felis fringilla eros, et sollicitudin est enim nec urna. Nulla porttitor vel quam a pellentesque. Cras suscipit est quis ullamcorper ultricies. Proin non nunc blandit, tincidunt nulla et, blandit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus accumsan mi vel tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut auctor lectus elit, non luctus tortor ornare vitae. Nullam rutrum mi sit amet sapien placerat, non pretium sem sodales. Curabitur eget diam sodales, accumsan sem sit amet, feugiat odio. Suspendisse id odio in dolor fermentum egestas nec in nisi. Donec molestie blandit rutrum. Sed eleifend sit amet odio et maximus. Aliquam vestibulum orci quis lacinia volutpat. Ut ultricies fermentum eros ac scelerisque. Nam mollis, leo sed lacinia fringilla, ligula felis fringilla eros, et sollicitudin est enim nec urna. Nulla porttitor vel quam a pellentesque. Cras suscipit est quis ullamcorper ultricies. Proin non nunc blandit, tincidunt nulla et, blandit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus.</p>
                    </div>
                    <div>
                        <h1 className="title">conhecimento.</h1>
                        <div className="flex flex-row flex-wrap gap-1">
                            <h4 className="tag">HTML</h4>
                            <h4 className="tag">CSS</h4>
                            <h4 className="tag">JAVASCRIPT</h4>
                            <h4 className="tag">REACT</h4>
                            <h4 className="tag">TAILWINDCSS </h4>
                            <h4 className="tag">PYTHON</h4>
                            <h4 className="tag">DJANGO</h4>
                            <h4 className="tag">DJANGO REST FRAMEWORK</h4>
                            <h4 className="tag">POSTGRESQL</h4>
                            <h4 className="tag">DOCKER</h4>
                            <h4 className="tag">LINUX</h4>
                            <h4 className="tag">NGINX</h4>
                            <h4 className="tag">CELERY</h4>
                            <h4 className="tag">REDIS</h4>
                            <h4 className="tag">RABBITMQ</h4>
                            <h4 className="tag">GIT</h4>
                            <h4 className="tag">GITHUB</h4>
                            <h4 className="tag">GITHUB ACTIONS</h4>
                            <h4 className="tag">CI/CD</h4>
                            <h4 className="tag">SELENIUM</h4>
                            <h4 className="tag">UNIT TESTING</h4>
                            <h4 className="tag">FUNCTIONAL TESTING</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


