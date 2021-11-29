import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
            posts: this.props.posts,
        }
    }

    render() {
        let location = window.location.pathname+'/';

        let posts = [];
        for (let i=0; i < this.state.posts.length; i++) {
            const slug = this.state.posts[i].fields.slug;
            const thumbnail = window.location.origin + '/media/' + this.state.posts[i].fields.thumbnail;
            const title = this.state.posts[i].fields.title;
            const author = this.state.posts[i].fields.author[0]+' '+this.state.posts[i].fields.author[1];
            const summary = this.state.posts[i].fields.summary;
            const options_date = {'day':'numeric', 'month':'long', 'year': 'numeric'};
            const date = new Date(this.state.posts[i].fields.publish).toLocaleString('en-US', options_date);
            
            posts.push(
                <Link to={location+slug} key={slug}>
                    <div key={i} id='post-frame' className="flex flex-col gap-2 cursor-pointer lg:flex-row">
                        <div className="flex flex-row justify-center items-center">
                            <img className="thumbnail-box" src={thumbnail} alt="post_thumbnail" />
                        </div>
                        <div className="flex flex-col justify-between p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div className="">
                                <h1 className="title">{title}</h1>
                                <h4 className="subtitle">por {author}</h4>
                            </div>
                            <p className="paragraph-base">{summary}</p>
                            <h5 className="subtitle">{date}</h5>
                        </div>
                    </div>
                </Link>
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


