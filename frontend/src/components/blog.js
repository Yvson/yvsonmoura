import React, { Component } from 'react';
import Loading from './loading.js';



export default class Blog extends Component {
    render() {
        return (
            <div className="h-full flex flex-col flex-grow gap-4 justify-between items-center lg:flex-row lg:justify-evenly lg:items-center">
                <Loading color="text-purple-800" />
            </div>
        )
    }
}


