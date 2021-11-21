import React, { Component } from 'react';
import {
  Routes,
  Route,
 } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Header from './components/header.js';
import Home from './components/home.js';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import Contact from './components/contact';
import favicon from './img/icons/ym_black_bgwhite.ico';
import manifest from './manifest.json';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: localStorage.theme || 'light',

    }

  }

  render() {

    return (
      <div>
      <Routes>
        <Route path="/" element={<Layout theme={this.state.theme} />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contato" element={<Contact />} />
        </Route>
      </Routes>
      </div>
    );
  }
}
