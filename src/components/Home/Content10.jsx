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
      OverPack: overPackData,
      childWrapper,
      explainWrapper
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
          <div {...overPackData}>
            <Row {...childWrapper}>
              {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    {item}
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
