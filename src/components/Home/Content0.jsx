import React from 'react';
import { Row, Col } from 'antd';
import { getChildrenToRender } from './utils';
import Underline from '../Underline'

class Content extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      childWrapper,
      explainWrapper,
    } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
            <Underline />
          </div>
          <div {...explainWrapper}>
            {explainWrapper.children.map(getChildrenToRender)}
          </div>
          <Row>
            {childWrapper.children.map((block, i) => {
              const { children: item, ...blockProps } = block;
              return (
                <Col key={i.toString()} {...blockProps}>
                  <div {...item}>
                    {item.children.map(getChildrenToRender)}
                  </div>
                  {/* <img src='arrow.svg' /> */}
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default Content;
