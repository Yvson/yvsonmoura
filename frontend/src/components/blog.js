import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import portfolio from '../img/svg/portfolio_landing_page.svg';
import blog from '../img/svg/blog_code_typing.svg';
import easytasks from '../img/svg/easytasks.svg';
import yvsonmoura from '../img/svg/yvsonmoura.svg';
import yasminmoura from '../img/svg/yasminmoura.svg';




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
            const thumbnail = this.state.posts[i].fields.thumbnail;
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
                            <p className="paragraph-base text-justify">{summary.substring(0, 400) + '...'}</p>
                            <h5 className="subtitle">{date}</h5>
                        </div>
                    </div>
                </Link>
            );
        }
        return (
            <div id="blog-content" className="h-full flex flex-col flex-grow gap-8 justify-between lg:justify-start">
                <div id="blog-frame" className="gap-y-2 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-center">
                    <div id="blog-description" className="gap-y-2 gap-x-8 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:items-start">
                        <div>
                            <h1 className="title">blog.</h1>
                            <p className="paragraph-base text-justify">
                                Sharing technology-related content is a good way of learning more about the things you are interested in. This area is reserved to promote tutorials, tips, concepts, basic understanding of how frameworks, programming languages and tools work, basic setups, and good practices. Resources like this one can help people to understand how to solve problems and implement code in a proper way. Sorting things out alone can sometimes be a hard challenge, but as a community, the pieces of the puzzle can be put together more easily. So, you are more than welcome to enjoy the content presented in this session.
                            </p>
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


