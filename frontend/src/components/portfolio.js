import React, { Component } from 'react';
import portfolio from '../img/svg/portfolio_landing_page.svg';
import easytasks from '../img/svg/easytasks.svg';
import yvsonmoura from '../img/svg/yvsonmoura.svg';
import yasminmoura from '../img/svg/yasminmoura.svg';


export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div id="portfolio-content" className="h-full flex flex-col flex-grow gap-8 justify-between lg:justify-start">
                <div id="portfolio-frame" className="gap-y-2 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-center">
                    <div id="portfolio-description" className="gap-y-2 gap-x-8 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-start">
                        <div className="flex flex-col items-start justify-start">
                            <h1 className="title">portfolio.</h1>
                            <p className="paragraph-base text-justify">
                                The process of creating a new project starts from an idea that offers a solution to a problem that could be a simple personal website to promote a person or even an complete system of ecommerce. After understanding the basic needs to reach the minimum viable product (MVP), the design process is initiated using a prototype tool to create a first layout with the basic colors and styles. Second, the first implementation of design is put in practice via a JS framework and a CSS framework. Third, the basic settings, database models and views are set up in Django. Finally, the front-end and back-end are integrated and tested, leaving only the production settings and deployment to be done at last.
                            </p>
                        </div>
                        <div>
                            <img className="max-w-xs lg:w-auto lg:max-w-sm" src={portfolio} alt="portfolio" />
                        </div>
                    </div>
                </div>

                <div id='portfolio-cases' className="">
                    <div>
                        <h1 className="title">cases.</h1>
                        <div className="gap-4 flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start">
                            <a href="https://www.easytasks.com.br">
                                <img className="case-box" src={easytasks} alt="easytasks" />
                            </a>
                            <a href="https://www.yvsonmoura.com">
                                <img className="case-box" src={yvsonmoura} alt="yvsonmoura" />
                            </a>
                            <a href="https://www.yasminmoura.com">
                                <img className="case-box" src={yasminmoura} alt="yasminmoura" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id='portfolio-applied-technologies'>
                    <h1 className="title">applied technologies.</h1>
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
                        <h4 className="tag">LINUX</h4>
                        <h4 className="tag">NGINX</h4>
                        <h4 className="tag">GIT</h4>
                        <h4 className="tag">GITHUB</h4>
                    </div>
                </div>
            </div>
        );
    }
}


