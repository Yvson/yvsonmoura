import React, { Component } from 'react';
import portfolio from '../img/svg/portfolio_landing_page.svg';
import blog from '../img/svg/blog_code_typing.svg';
import easytasks from '../img/svg/easytasks.svg';
import yvsonmoura from '../img/svg/yvsonmoura.svg';
import yasminmoura from '../img/svg/yasminmoura.svg';
import post_thumbnail from '../img/svg/post_thumbnail_mock.svg';



export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        let posts = [];
        for (let i=0; i <= 10; i++) {
            posts.push(
            <div id="post-frame" className="flex flex-row gap-2 cursor-pointer">
                <div className="">
                    <a href="">
                        <img className="thumbnail-box" src={post_thumbnail} alt="post_thumbnail" />
                    </a>
                </div>
                <div className="flex flex-col justify-between p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div className="">
                        <h1 className="title">Introdução ao Django</h1>
                        <h4 className="subtitle">por Yvson Moura</h4>
                    </div>
                    <p className="paragraph-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus accumsan mi vel tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut auctor lectus elit, non luctus tortor ornare vitae.</p>
                    <h5 className="subtitle">08 de Agosto</h5>
                </div>
            </div>
            );
        }
        return (
            <div id="blog-content" className="h-full flex flex-col flex-grow gap-8 justify-between lg:justify-start">
                <div id="blog-frame" className="gap-y-2 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-center">
                    <div id="blog-description" className="gap-y-2 gap-x-8 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-center">
                        <div>
                            <h1 className="title">blog.</h1>
                            <p className="paragraph-base text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus accumsan mi vel tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut auctor lectus elit, non luctus tortor ornare vitae. Nullam rutrum mi sit amet sapien placerat, non pretium sem sodales. Curabitur eget diam sodales, accumsan sem sit amet, feugiat odio. Suspendisse id odio in dolor fermentum egestas nec in nisi. Donec molestie blandit rutrum. Sed eleifend sit amet odio et maximus. Aliquam vestibulum orci quis lacinia volutpat. Ut ultricies fermentum eros ac scelerisque. Nam mollis, leo sed lacinia fringilla, ligula felis fringilla eros, et sollicitudin est enim nec urna. Nulla porttitor vel quam a pellentesque. Cras suscipit est quis ullamcorper ultricies. Proin non nunc blandit, tincidunt nulla et, blandit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus accumsan mi vel tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut auctor lectus elit, non luctus tortor ornare vitae. Nullam rutrum mi sit amet sapien placerat, non pretium sem sodales. Curabitur eget diam sodales, accumsan sem sit amet, feugiat odio. Suspendisse id odio in dolor fermentum egestas nec in nisi. Donec molestie blandit rutrum.</p>
                        </div>
                        <div>
                            <img className="max-w-xs lg:w-auto lg:max-w-md" src={blog} alt="blog" />
                        </div>
                    </div>
                </div>

                <div id='blog-posts' className="">
                    <div className="">
                        <h1 className="title">posts.</h1>
                        <div className="flex flex-col gap-2">
                            {posts}
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}


