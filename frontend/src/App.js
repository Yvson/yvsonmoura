import React, { Component } from 'react';
import {
  Routes,
  Route,
 } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './components/home.js';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import Post from './components/post';
import Contact from './components/contact';
import favicon from './img/icons/ym_black_bgwhite.ico';
import manifest from './manifest.json';
import PageNotFound from './components/page_not_found';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: localStorage.theme || 'light',
      posts: this.props.data.posts,
    }

  }

  render() {

    return (
      <div>
      <Routes>
        <Route path="/" element={<Layout theme={this.state.theme} />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog">
            <Route path="" element={<Blog posts={this.state.posts}/>} />
            <Route path=":slug" element={<Post posts={this.state.posts}/>} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      </div>
    );
  }
}
