import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import django from 'highlight.js/lib/languages/django';
import Loading from './loading';

import 'highlight.js/styles/github-dark.css';


export default function Post(props) {
        const [postData, setPostData] = useState(null);    
        let { slug } = useParams();
        const posts = props.posts;
        
        
        function getPost() {
            return posts.find( e => e.fields.slug == slug);
        }

        useEffect(() => {
            setPostData(getPost());
        }, [slug])

        if (!postData && !getPost()) {
            return (
                <div className="h-full flex flex-col flex-grow gap-4 justify-center lg:flex-row lg:justify-evenly lg:items-center">
                    <Navigate to="/notfound" replace={true} />
                </div>
            )
        } else if (!postData) {
            return (
                <div className="h-full flex flex-col flex-grow gap-4 justify-center items-center lg:flex-row lg:justify-evenly lg:items-center">
                    <Loading color="text-purple-800 dark:text-white"/>
                </div>

            );
        }

        
        const title = postData.fields.title;
        const author = postData.fields.author[0] + ' ' + postData.fields.author[1];
        const cover = postData.fields.cover;
        const options_date = {'day':'numeric', 'month':'long', 'year': 'numeric', 'hour':'2-digit', 'minute':'2-digit'};
        const published_at = new Date(postData.fields.publish).toLocaleString('en-US', options_date);
        const updated_at = new Date(postData.fields.updated).toLocaleString('en-US', options_date);
        const summary = postData.fields.summary;
        const body = postData.fields.body;

        const myRehypeHighlight = () => rehypeHighlight({
            languages:{'django': django},
        })

        return (
            <div id="post-content" className="h-full flex flex-col flex-grow gap-8 justify-between">
                <div id="post-frame" className="gap-y-2 flex flex-col justify-start items-start">
                    <div id="post-title-author" className="gap-y-2 gap-x-8 flex flex-col justify-center items-start">
                        <h1 className="post-title">{title}.</h1>
                        <p className="post-subtitle text-justify">by {author}</p>
                    </div>
                    <div id="post-cover" className="">
                        <img className="h-40 object-cover rounded-xl w-full lg:h-full" src={cover} alt="Cover" />
                    </div>
                    <div id="post-date">
                        <p className="post-date">Published at {published_at}</p>
                        <p className="post-date">Updated at {updated_at}</p>
                    </div>
                    <div id="post-summary" className="max-w-4xl py-6 post-preview-base text-justify self-center lg:!text-xl">
                        {summary}
                    </div>
                    <div className="w-full lg:max-w-4xl lg:self-center">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[myRehypeHighlight]}
                            className="max-w-none prose post-paragraph-base text-justify lg:prose-xl lg:!text-xl"
                            children={body}
                        />
                    </div>
                </div>
            </div>
        );
    }
