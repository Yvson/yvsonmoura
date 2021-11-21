import React, { Component } from 'react';


export default class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme,
            isToggleOn: this.props.isToggleOn,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            theme: prevState.isToggleOn === false ? 'dark' : 'light',
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    render() {
        if (this.state.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        return (
            <div className="flex items-center justify-center w-full">
                <label
                    htmlFor="toogle"
                    className="flex items-center cursor-pointer"
                >
                    <div onClick={this.handleClick} className="relative" >
                        <input onChange={this.setState} checked={this.state.isToggleOn} id="toggle" type="checkbox" className="sr-only" />
                        {/*<!-- line -->*/}
                        <div className="w-10 h-2 bg-gray-200 rounded-full shadow-inner"></div>
                        {/*<!-- dot -->*/}
                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow shadow-xs -left-1 -top-2 transition duration-200"></div>
                    </div>
                    {/*<!-- label -->*/}
                    <div className="ml-3 text-gray-900 font-light dark:text-white"></div>
                </label>
            </div>
        );
    }
}


