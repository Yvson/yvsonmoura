import React, { Component } from 'react';
import { Outlet } from 'react-router';
import Header from "./header";


export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme,
        }
    }

    render() {
        return (
            <div className="h-full p-8 gap-8 min-h-screen flex flex-col dark:bg-gray-900">
                <Header theme={this.state.theme}/>
                <Outlet />
            </div>
        );
    }
}