import React, { Component } from 'react'
import Toggle from './toggle_button';
import CustomLink from './custom_link';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme,
        }
    }
    render() {
        return (
            <div>
                <header className="header">
                    <div className="">
                        <h1 className="logo">yvsonmoura.</h1>
                    </div>
                    <nav className="lg:pr-12">
                        <ul className="flex flex-col justify-center items-center pt-4 gap-2 lg:gap-12 lg:flex-row lg:justify-end lg:items-center lg:p-0">
                            <CustomLink to='/'>home</CustomLink>
                            <CustomLink to='/portfolio'>portfolio</CustomLink>
                            <CustomLink to='/blog'>blog</CustomLink>
                            <CustomLink to='/contact'>contact</CustomLink>
                            <div className="pt-2 lg:pt-0">
                                <Toggle theme={this.state.theme} isToggleOn={this.state.theme === 'dark' ? true : false} />
                            </div>
                        </ul>
                    </nav>
                </header>
          
            </div>
        )
    }
}



