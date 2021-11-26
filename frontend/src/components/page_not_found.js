import React, { Component } from 'react';
import page_not_found from '../img/svg/page_not_found.svg';



export default class PageNotFound extends Component {
    render() {
        return (
            <div id="notfound-content" className="h-full flex flex-col flex-grow gap-4 justify-center items-center lg:flex-row lg:justify-evenly lg:items-center">
                <div id="notfound-frame" className="gap-y-4 flex flex-col justify-center items-center">
                    <img className="w-auto lg:max-w-2xl" src={page_not_found} alt="404 Error" />
                    <h1 className="title">Page Not Found</h1>
                    <h4 className="paragraph-sm">This page does not exist!</h4>
                </div>
            </div>
        )
    }
}

