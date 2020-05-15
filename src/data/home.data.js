import React from 'react';
import Underline from '../components/Underline'

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'computervision-logo.svg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          to: '/',
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>Trang chủ</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          to: 'ekyc',
          href: '/ekyc',
          children: [
            {
              children: (
                <span>
                  <p>Công nghệ</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            children: {
              to: '/',
              href: '#',
              children: [
                {
                  children: (
                    <span>
                      <p>test</p>
                    </span>
                  ),
                  name: 'text',
                },
              ],
            },
          },
          {
            children: {
              to: '/',
              href: '#',
              children: [
                {
                  children: (
                    <span>
                      <p>test nhe</p>
                    </span>
                  ),
                  name: 'text',
                },
              ],
            },
          },
          {
            children: {
              to: '/',
              href: '#',
              children: [
                {
                  children: (
                    <span>
                      <p>test test</p>
                    </span>
                  ),
                  name: 'text',
                },
              ],
            },
          },
        ]
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>Ứng dụng</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>Developer</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item4',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>Company</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item5',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>Đăng nhập</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      // { name: 'title', children: '产品名', className: 'banner5-title' },
      // {
      //   name: 'explain',
      //   className: 'banner5-explain',
      //   children: '产品标语介绍',
      // },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <p>
            Ứng dụng các kỹ thuật Machine Learning trong lĩnh vực <b>Computer Vision</b> để cung cấp các giải pháp <b>tự động hóa</b> cho các doanh nghiệp với chi phí tối ưu
          </p>
        )
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children:
        {
          href: '#',
          className: 'banner5-button',
          type: 'primary',
          children: 'Dùng thử',
        }
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children:
        {
          href: '#',
          className: 'banner5-button background-ghost',
          type: 'primary',
          children: 'Liên hệ',
        }
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
      'banner.png',
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  // OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Các công nghệ của chúng tôi</p>
          </span>
        ),
      },
    ],
  },
  explainWrapper: {
    className: 'explain-wrapper',
    children: [
      {
        name: 'explain',
        children: (
          <span>
            <p>Ứng dụng các thuật toán và công nghệ Machine Learning sử dụng kỹ thuật Deep Learning trong lĩnh vực Computer Vision</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper k9h76g7v2q-editor_css',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: (
                <img src='tech0.png' alt='img' />
              )
              // 'tech0.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Nhận diện khuôn mặt</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Tối ưu các mô hình trí tuệ nhân tạo để cung cấp các giải pháp như nhận diện khuôn mặt, phân tích độ tuổi, phân tích cảm xúc cho một hoặc nhiều khuôn mặt trong các ảnh hoặc video.</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: (
                <img src='tech1.png' alt='img' />
              )
              // 'tech1.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Nhận diện ký tự quang học - OCR</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Tự động nhận diện văn bản từ các ảnh trong nhiều loại tài liệu khác nhau, cho phép bạn xử lý hàng triệu tài liệu một cách nhanh chóng và tự động hoá quy trình làm việc.</p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: (
                <img src='tech2.png' alt='img' />
              )
              // 'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Web & Mobile App Development</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Cung cấp giải pháp tối ưu, giúp nhanh chóng hiện thực hoá các ý tưởng kinh doanh hoặc thúc đẩy quá trình chuyển đổi số của các doanh nghiệp.</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content01DataSource = {
  wrapper: { className: 'home-page-wrapper content8-wrapper' },
  page: { className: 'home-page content8' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Các ứng dụng</p>
          </span>
        ),
      },
    ],
  },
  explainWrapper: {
    className: 'explain-wrapper',
    children: [
      {
        name: 'explain',
        children: (
          <span>
            <p>Đội ngũ giàu kinh nghiệm và đam mê của chúng tôi liên tục nghiên cứu các giải pháp ứng dụng vào thực tế để giúp tăng tốc quá trình chuyển đổi số và tự động hoá quy trình làm việc của các doanh nghiệp</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content8-block-wrapper k9h76g7v2q-editor_css',
    children: [
      {
        name: 'block0',
        className: 'content8-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content8-block-item',
          children: [
            {
              name: 'image',
              className: 'content8-block-icon',
              children:
                <img src='app0.png' alt='img' />,
            },
            {
              name: 'title',
              className: 'content8-block-title',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Định danh khách hàng - eKYC</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Kết hợp công nghệ OCR và nhận diện khuôn mặt để tự động xác thực khuôn mặt selfie với ảnh trên giấy tờ tuỳ thân, kết hợp với các kỹ thuật chống giả mạo để cung cấp giải pháp định danh khách hàng có độ tin cậy cao, đáp ứng các yêu cầu cao về bảo mật trong các lĩnh vực như tài chính, ngân hàng, bảo hiểm.</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content8-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content8-block-item',
          children: [
            {
              name: 'image',
              className: 'content8-block-icon',
              children:
                <img src='app1.png' alt='img' />,
            },
            {
              name: 'title',
              className: 'content8-block-title',
              children: (
                <span>
                  <p>Nhận dạng giấy tờ tuỳ thân</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Ứng dụng công nghệ OCR vào nhận diện và trích xuất thông tin từ nhiều loại giấy tờ tuỳ thân cho phép doanh nghiệp tự động xử lý hàng triệu tài liệu một cách nhanh chóng và với độ chính xác cao.</p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content8-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content8-block-item',
          children: [
            {
              name: 'image',
              className: 'content8-block-icon',
              children:
                <img src='app2.png' alt='img' />,
            },
            {
              name: 'title',
              className: 'content8-block-title',
              children: (
                <span>
                  <p>Nhận dạng biển số xe</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Ứng dụng công nghệ OCR để nhận diện biển số xe, áp dụng vào các giải pháp thu phí tự động, quản lý bãi đỗ xe.</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'content8-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content8-block-item',
          children: [
            {
              name: 'image',
              className: 'content8-block-icon',
              children:
                <img src='app3.png' alt='img' />,
            },
            {
              name: 'title',
              className: 'content8-block-title',
              children: (
                <span>
                  <p>Xác thực khuôn mặt</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Ứng dụng công nghệ nhận dạng khuôn mặt và tìm kiếm khuôndạng tốc độ cao cùng với các kỹ thuật chống giả mạo để cung cấp giải pháp xác thực bằng khuôn mặt có độ tin cậy cao.</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'content8-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content8-block-item',
          children: [
            {
              name: 'image',
              className: 'content8-block-icon',
              children:
                <img src='app4.png' alt='img' />,
            },
            {
              name: 'title',
              className: 'content8-block-title',
              children: (
                <span>
                  <p>Chấm công khuôn mặt</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Ứng dụng công nghệ nhận diện khuôn mặt và tìm kiếm khuôn mặt cho giải pháp chấm công bằng khuôn mặt.</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'content8-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content8-block-item',
          children: [
            {
              name: 'image',
              className: 'content8-block-icon',
              children:
                <img src='app5.png' alt='img' />,
            },
            {
              name: 'title',
              className: 'content8-block-title',
              children: (
                <span>
                  <p>Quản lý kho ảnh</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Ứng dụng công nghệ nhận diện khuôn mặt, phân cụm khuôn mặt, phân tích cảm xúc, chấm điểm thẩm mỹ để cung cấp giải pháp quản lý kho ảnh với nhiều tính năng tự động, thông minh.</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content10-wrapper' },
  page: { className: 'home-page content10' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Được tin cậy bởi các khách hàng đến từ nhiều quốc gia</p>
          </span>
        ),
      },
    ],
  },
  explainWrapper: {
    className: 'explain-wrapper',
    children: [
      {
        name: 'explain',
        children: (
          <span>
            <p>Chúng tôi đã và đang giúp các doanh nghiệp đến từ nhiều quốc gia, hoạt động trong nhiều lĩnh vực khác nhau như tài chính, nhân sự, bán lẻ, IoT... trong việc hiện thực hoá các ý tưởng kinh doanh và đẩy nhanh quá trình chuyển đổi số của họ với quy trình và chi phí tối ưu.</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'home-page-wrapper hka54fwals1-editor_css',
    children: [
      {
        name: 'block0',
        className: 'content10-block',
        md: 4,
        xs: 12,
        children: <img src='partner0.svg' />
      },
      {
        name: 'block1',
        className: 'content10-block',
        md: 4,
        xs: 12,
        children: <img src='partner1.svg' />
      },
      {
        name: 'block2',
        className: 'content10-block',
        md: 4,
        xs: 12,
        children: <img src='partner2.svg' />
      },
      {
        name: 'block3',
        className: 'content10-block',
        md: 4,
        xs: 12,
        children: <img src='partner3.svg' />
      },
      {
        name: 'block4',
        className: 'content10-block',
        md: 4,
        xs: 12,
        children: <img src='partner4.svg' />
      },
      {
        name: 'block5',
        className: 'content10-block',
        md: 4,
        xs: 12,
        children: <img src='partner5.svg' />
      },
    ]
  }
}
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>成功案例</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>公司简介</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <span>
              <span>
                <h2>苏州子浩物资回收有限公司</h2>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>回收项目</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  电梯回收，中央空调回收，废旧物资回收，机械设备回收，厨房、宾馆设备等。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>企业精神</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>开拓进取、锐意创新、刻意求真、崇尚完美。</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>服务宗旨</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>价格合理、信守承诺、安全快捷 、高效。</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>企业原则</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  讲诚信、以信誉求发展。
                  议、指导。前进中的望月将会在不断变化的各种客观条件下，把握市场动向，熟悉市场环境，完善的饰后服务，让客户真正感受到望月，热情、真诚、诚信的全方位服务。
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>新闻资讯</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <span>
                <p>公司新闻</p>
              </span>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: {
            className: 'content7-tag-name',
            children: (
              <span>
                <p>行业新闻</p>
              </span>
            ),
          },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Tích hợp nhanh chóng, dễ dàng</p>
          </span>
        ),
      },
    ],
  },
  explainWrapper: {
    className: 'explain-wrapper',
    children: [
      {
        name: 'explain',
        children: (
          <span>
            <p>CVS Vision API cung cấp khả năng tích hợp nhanh chóng, linh hoạt theo chuẩn Restful APIs trên cả hai nền tảng Cloud và On-Premise, phù hợp với nhu cầu của tất cả các doanh nghiệp, từ các startups, doanh nghiệp vừa và nhỏ đến các doanh nghiệp lớn.</p>
          </span>
        ),
      },
    ],
  },
  imgWrapper: { className: 'content1-img', md: 12, xs: 24 },
  img: {
    children: 'integrate0.png',
  },
  textWrapper: { className: 'content1-text', md: 12, xs: 24 },
  title: { className: 'content1-title', children: 'Cloud APIs - Dịch vụ tích hợp đám mây' },
  content: {
    className: 'content1-content',
    children: (
      <>
        Tích hợp một cách nhanh chóng với dịch vụ của chúng tôi và cung cấp đến khách hàng của bạn trong vòng chỉ vài giờ đồng hồ.
        <br />
        <br />
        Dùng bao nhiêu trả tiền bấy nhiêu, giúp chi phí linh hoạt và tối ưu tuỳ theo nhu cầu sử dụng và tình hình kinh doanh của bạn.
        <br />
        <br />
        Luôn luôn được sử dụng các công nghệ mới nhất của chúng tôi.
      </>
    )
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 12, xs: 24 },
  img: {
    children: 'integrate1.png',
  },
  textWrapper: { className: 'content2-text', md: 12, xs: 24 },
  title: { className: 'content2-title', children: 'On-Premise - Cài đặt máy chủ khách hàng' },
  content: {
    className: 'content2-content',
    children: (
      <>
        Tất cả dữ liệu được xử lý bên trong trung tâm dữ liệu của bạn. Doanh nghiệp của bạn có toàn quyền kiểm soát tất cả các dữ liệu đầu vào và đầu ra.
        <br />
        <br />
        Chúng tôi tùy chỉnh và triển khai các quy trình và hệ thống để tuân thủ các tiêu chuẩn nội bộ doanh nghiệp và luật pháp địa phương về bảo mật dữ liệu và bảo vệ quyền riêng tư.
      </>
    )
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '团队成员' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams1-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams1-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档中心阿里巴巴集团内部使用多年，众多中小企业首选。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams1-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
            },
          ],
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '会议日程', className: 'title-h1' },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '开幕致辞' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
    ],
  },
};

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 4,
        className: 'block',
        title: {
          className: 'logo',
          children:
            <img src='computervision-logo-white.svg' alt='logo' />
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'Tầng 2 tháp A toà nhà T6-08, đường Tôn Quang Phiệt, Bắc Từ Liêm, Hà Nội',
            },
            {
              name: 'content1',
              children: 'sales@computervision.com.vn',
            },
            {
              name: 'content2',
              children: '088.66.25.220',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 5,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Công nghệ</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Nhận diện khuôn mặt</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>OCR</p>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <p>Web & Mobile App Development</p>
                </span>
              ),
            },
            // {
            //   name: 'link3',
            //   href: '#',
            //   children: (
            //     <span>
            //       <p>工程拆除</p>
            //     </span>
            //   ),
            // },
            // {
            //   name: 'link4',
            //   href: '#',
            //   children: (
            //     <span>
            //       <p>中央空调回收</p>
            //     </span>
            //   ),
            // },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 5,
        className: 'block',
        title: { children: 'Ứng dụng' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Định danh khách hàng' },
            { href: '#', name: 'link1', children: 'Nhận dạng giấy tờ tuỳ thân' },
            { href: '#', name: 'link2', children: 'Nhận dạng biển số xe' },
            { href: '#', name: 'link3', children: 'Xác thực khuôn mặt' },
            { href: '#', name: 'link4', children: 'Chấm công khuôn mặt' },
            { href: '#', name: 'link5', children: 'Quản lý kho ảnh' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 5,
        className: 'block',
        title: { children: 'Developer' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'API documentation' },
          ],
        },
      },
      {
        name: 'block4',
        xs: 24,
        md: 5,
        className: 'block',
        title: { children: 'Company' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'About Us' },
            { href: '#', name: 'link1', children: 'Contact Us' },
            { href: '#', name: 'link2', children: 'Partnership Program' },
          ],
        },
      },
      // {
      //   name: 'block3',
      //   xs: 24,
      //   md: 5,
      //   className: 'block',
      //   title: {
      //     children: (
      //       <span>
      //         <span>
      //           <p>关注我们</p>
      //         </span>
      //       </span>
      //     ),
      //     className: 'k9h7k134cu-editor_css',
      //   },
      //   childWrapper: {
      //     children: [
      //       {
      //         name: 'image~k9h7il8htc6',
      //         className: 'k9h7irl6jgj-editor_css',
      //         children:
      //           'https://zos.alipayobjects.com/rmsportal/HzvPfCGNCtvGrdk.png',
      //       },
      //     ],
      //   },
      // },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        {/* Copyright ©2020 by <a href="https://motion.ant.design">Computer Vision Viet Nam</a> All Rights Reserved */}
        Copyright ©2020 by Computer Vision Viet Nam. All Rights Reserved
      </span>
    ),
  },
};
