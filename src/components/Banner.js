import React from 'react';
import { getChildrenToRender } from './utils';

class Banner5 extends React.PureComponent {
  render() {
    const { ...tagProps } = this.props;
    const { dataSource } = tagProps;
    delete tagProps.dataSource;
    delete tagProps.isMobile;
    return (
      <div {...tagProps} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.childWrapper}>
            {dataSource.childWrapper.children.map(getChildrenToRender)}
          </div>
          <div {...dataSource.image}>
            <img src={dataSource.image.children} width="100%" alt="img" />
          </div>
        </div>
      </div>
    );
  }
}
export default Banner5;
