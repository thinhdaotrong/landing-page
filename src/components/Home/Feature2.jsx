import React from 'react';
import { Row, Col } from 'antd';

function Content2(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const img = (
    <Col {...dataSource.imgWrapper}>
      <span {...dataSource.img}>
        <img src={dataSource.img.children} width="100%" alt="img" />
      </span>
    </Col>
  );
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <Row {...dataSource.OverPack}>
        {isMobile && img}
        <Col {...dataSource.textWrapper}>
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          <div key="p" {...dataSource.content}>
            {dataSource.content.children}
          </div>
        </Col>
        {!isMobile && img}
      </Row>
    </div>
  );
}

export default Content2;
