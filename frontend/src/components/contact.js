import React, { Component } from 'react';
import Loading from './loading.js';



export default class Contact extends Component {
    render() {
        return (
            <div className="h-full flex flex-col flex-grow gap-4 justify-between lg:flex-row lg:justify-evenly lg:items-center">
                <Loading color="text-pink-700" />
            </div>
        )
    }
}


