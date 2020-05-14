import React, { Component } from "react";
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCode, faGem, fas } from '@fortawesome/free-solid-svg-icons';
import { navigate } from 'gatsby-link';
import Banner from '../components/Banner'
import Content0 from '../components/Home/Content0';
import Content1 from '../components/Home/Content1';
import Content10 from '../components/Home/Content10';
import Content5 from '../components/Home/Content5';
import Content3 from '../components/Home/Content3';
import Feature5 from '../components/Home/Feature5';
import Feature1 from '../components/Home/Feature1';
import Feature2 from '../components/Home/Feature2';
import Content9 from '../components/Home/Content9';
import Teams1 from '../components/Home/Teams1';

import {
  Banner50DataSource,
  Content00DataSource,
  Content01DataSource,
  Content10DataSource,
  Content50DataSource,
  Content30DataSource,
  Feature50DataSource,
  Feature10DataSource,
  Feature20DataSource,
  Teams10DataSource,
  Content90DataSource
} from '../data/home.data';

library.add(faHeart, faCode, faGem, fab, fas);

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 'form-name': form.getAttribute('name'), ...this.state })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));


  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <>
        <SEO title='Computer Vision Viet Nam - Công nghệ Computer Vision cho các doanh nghiệp Việt Nam' />
        <Layout>
          <Banner
            id="Banner2_0"
            key="Banner2_0"
            dataSource={Banner50DataSource}
            isMobile={this.state.isMobile}
          />
          <Content0
            id="Content0_0"
            key="Content0_0"
            dataSource={Content00DataSource}
            isMobile={this.state.isMobile}
          />
          <Content1
            id="Content0_1"
            key="Content0_1"
            dataSource={Content01DataSource}
            isMobile={this.state.isMobile}
          />
          {/* <Content5
            id="Content5_0"
            key="Content5_0"
            dataSource={Content50DataSource}
            isMobile={this.state.isMobile}
          />
          <Content3
            id="Content3_0"
            key="Content3_0"
            dataSource={Content30DataSource}
            isMobile={this.state.isMobile}
          /> */}
          {/* <Feature5
            id="Feature5_0"
            key="Feature5_0"
            dataSource={Feature50DataSource}
            isMobile={this.state.isMobile}
          /> */}
          <Feature1
            id="Feature1_0"
            key="Feature1_0"
            dataSource={Feature10DataSource}
            isMobile={this.state.isMobile}
          />
          <Feature2
            id="Feature2_0"
            key="Feature2_0"
            dataSource={Feature20DataSource}
            isMobile={this.state.isMobile}
          />
          {/* <Content9
            id="Content9_0"
            key="Content9_0"
            dataSource={Content90DataSource}
            isMobile={this.state.isMobile}
          /> */}
          {/* <Teams1
            id="Teams1_0"
            key="Teams1_0"
            dataSource={Teams10DataSource}
            isMobile={this.state.isMobile}
          /> */}
          <Content10
            id="Content1_0"
            key="Content1_0"
            dataSource={Content10DataSource}
            isMobile={this.state.isMobile}
          />
        </Layout>
      </>
    )
  }
}

export default IndexPage;
