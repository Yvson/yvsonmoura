import React, { Component } from 'react';
import profile from '../img/avatar/profile.png';
import github_icon from '../img/icons/github.svg';
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
                        <a href="https://www.github.com/Yvson">
                            <img className="icon-social" src={github_icon} alt="Github Profile" />
                        </a>
                        <a href="https://www.linkedin.com/in/yvsonmoura/">
                            <img className="icon-social" src={linkedin_icon} alt="Linkedin Profile" />
                        </a>
                        
                    </div>

                </div>

                <div className="max-w-7xl space-y-12 flex-grow">
                    <div >
                        <h1 className="title">profile.</h1>
                        <p className="paragraph-base text-justify">
                             I am 29, problem-solving driven, objective and straightforward. Self-taught in programming through books, articles, videos, courses, and documentation, I am focusing on the following stack: React + Django + PostgreSQL. From this stack, I have been building a simple portfolio to show my capabilities. Thus, I have been studying programming and other correlated topics since the beginning of 2021. Moreover, I tend to always be open-minded to new possibilities of doing the same things differently and learn new technologies. Currently, I am looking for an Entry-level Fullstack Developer position to get into the market in order to gain experience and build a career.
                        </p>
                    </div>
                    <div >
                        <h1 className="title">major achievements.</h1>
                        <ul className="paragraph-base text-justify7">
                            <li>Bachelor of Science in Petroleum Engineering (Federal University of Sergipe - Aracaju, Brazil), 2011-2017. </li>
                            <li>Scholarship Program in Petroleum Engineering (Missouri University of Science and Technology - Rolla, USA), 2014-2015. </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="title">knowledge.</h1>
                        <div className="flex flex-row flex-wrap gap-1">
                            <h4 className="tag">HTML</h4>
                            <h4 className="tag">CSS</h4>
                            <h4 className="tag">JAVASCRIPT</h4>
                            <h4 className="tag">REACT</h4>
                            <h4 className="tag">TAILWINDCSS </h4>
                            <h4 className="tag">PYTHON</h4>
                            <h4 className="tag">DJANGO</h4>
                            <h4 className="tag">DJANGO REST FRAMEWORK</h4>
                            <h4 className="tag">SQLITE</h4>
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
                            <h4 className="tag">CYPRESS</h4>
                            <h4 className="tag">PYTEST</h4>
                            <h4 className="tag">UNIT TESTING</h4>
                            <h4 className="tag">FUNCTIONAL TESTING</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


