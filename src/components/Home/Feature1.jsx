import React from 'react';
import { Row, Col } from 'antd';
import { getChildrenToRender } from './utils';
import Underline from '../Underline'

function Content1(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  const { titleWrapper, explainWrapper } = dataSource
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...titleWrapper}>
        {titleWrapper.children.map(getChildrenToRender)}
      </div>
      <Underline />
      <div {...explainWrapper}>
        {explainWrapper.children.map(getChildrenToRender)}
      </div>
      <Row {...dataSource.OverPack}>
        <Col {...dataSource.imgWrapper}>
          <span {...dataSource.img}>
            <img src={dataSource.img.children} width="100%" alt="img" />
          </span>
        </Col>
        <Col {...dataSource.textWrapper}>
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          <div key="p" {...dataSource.content}>
            {dataSource.content.children}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Content1;
