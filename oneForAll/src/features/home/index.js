/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav3 from './Top';
import Banner1 from './Banner1';
import Content3 from './Content3';
import Pricing0 from './Pricing0';
import Footer2 from './Footer2';

import {
  TopDataSource,
  BannerDataSource,
  ContentDataSource,
  PricingDataSource,
  FooterDataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      // 导航栏
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={TopDataSource}
        isMobile={this.state.isMobile}
      />,
      // banner 轮转图
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={BannerDataSource}
        isMobile={this.state.isMobile}
      />,
      // Center 1
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={ContentDataSource}
        isMobile={this.state.isMobile}
      />,
      // Center 1
      <Content3
        id="Content2_0"
        key="Content2_0"
        dataSource={ContentDataSource}
        isMobile={this.state.isMobile}
      />,
      // center 2
      <Pricing0
        id="Pricing0_0"
        key="Pricing0_0"
        dataSource={PricingDataSource}
        isMobile={this.state.isMobile}
      />,
      // 注脚
      <Footer2
        id="Footer2_0"
        key="Footer2_0"
        dataSource={FooterDataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
