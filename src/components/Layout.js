import React, { Component } from "react"
import { enquireScreen } from 'enquire-js';

import Header from './NavBar'
import Footer from './Footer'

import {
    Nav30DataSource,
    Footer10DataSource,
} from '../data/home.data.js';
import '../less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
        };
    }
    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
    }
    render() {
        const { children } = this.props
        return (
            <div>
                <Header dataSource={Nav30DataSource} isMobile={this.state.isMobile} />
                {children}
                <Footer dataSource={Footer10DataSource} isMobile={this.state.isMobile} />
            </div>
        );
    }
}

export default Layout;