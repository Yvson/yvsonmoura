import React, { Component } from 'react';
import Loading from './loading';
import portfolio from '../img/svg/portfolio.svg';
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
            <div id="portfolio-content" className="h-full flex flex-col flex-grow gap-8 justify-between lg:justify-start lg:justify-center">
                <div id="portfolio-frame" className="gap-y-2 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-center">
                    <div id="portfolio-description" className="gap-y-2 gap-x-8 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-center">
                        <div>
                            <h1 className="title">portfolio.</h1>
                            <p className="paragraph-base text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus accumsan mi vel tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut auctor lectus elit, non luctus tortor ornare vitae. Nullam rutrum mi sit amet sapien placerat, non pretium sem sodales. Curabitur eget diam sodales, accumsan sem sit amet, feugiat odio. Suspendisse id odio in dolor fermentum egestas nec in nisi. Donec molestie blandit rutrum. Sed eleifend sit amet odio et maximus. Aliquam vestibulum orci quis lacinia volutpat. Ut ultricies fermentum eros ac scelerisque. Nam mollis, leo sed lacinia fringilla, ligula felis fringilla eros, et sollicitudin est enim nec urna. Nulla porttitor vel quam a pellentesque. Cras suscipit est quis ullamcorper ultricies. Proin non nunc blandit, tincidunt nulla et, blandit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus accumsan mi vel tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut auctor lectus elit, non luctus tortor ornare vitae. Nullam rutrum mi sit amet sapien placerat, non pretium sem sodales. Curabitur eget diam sodales, accumsan sem sit amet, feugiat odio. Suspendisse id odio in dolor fermentum egestas nec in nisi. Donec molestie blandit rutrum.</p>
                        </div>
                        <div>
                            <img className="max-w-xs lg:w-auto lg:max-w-md" src={portfolio} alt="portfolio" />
                        </div>
                    </div>
                </div>

                <div id='portfolio-cases' className="">
                    <div>
                        <h1 className="title">cases.</h1>
                        <div className="gap-4 flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-start">
                            <a href="http://www.easytasks.com.br">
                                <img className="case-box" src={easytasks} alt="easytasks" />
                            </a>
                            <a href="http://www.yvsonmoura.com">
                                <img className="case-box" src={yvsonmoura} alt="yvsonmoura" />
                            </a>
                            <a href="http://www.yasminmoura.com">
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
        );
    }
}


