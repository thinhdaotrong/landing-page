module.exports = {
  siteMetadata: {
    title: `Computer Vision Vietnam`,
    name: `Computer Vision Vietnam`,
    siteUrl: `https://computervision.com.vn/`,
    description: `Website Computer Vision Vietnam`,
    social: [
      {
        name: `facebook`,
        url: `https://www.facebook.com/computervisionvietnam/`
      },
      // {
      //   name: `twitter`,
      //   url: `https://twitter.com/HuntaroSan`
      // }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Computer Vision Vietnam`,
        short_name: `CVS`,
        start_url: `/`,
        // background_color: `#182952`,
        // theme_color: `#a2466c`,
        // display: `standalone`,
        // icon: 'src/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#0066FF'
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}