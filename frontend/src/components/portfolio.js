import React, { Component } from 'react';
import Loading from './loading';



export default class Portfolio extends Component {
    render() {
        return (
            <div className="h-full flex flex-col flex-grow gap-4 justify-center items-center lg:flex-row lg:justify-evenly lg:items-center">
                <Loading color="text-green-500" />
            </div>
        )
    }
}


