import React from 'react'
import webpack from './webpack.config.js'
import siteData, { URL as siteRoot } from './siteData'

const Document = ({
  Html, Head, Body, children, siteData,
}) => (
  <Html lang="en-US">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* Schema.org for Google */}
      <meta item="name" content={siteData.title} data-react-helmet="true" />
      <meta
        item="description"
        content={siteData.description}
        data-react-helmet="true"
      />
      <meta
        item="image"
        content={`${siteData.URL}/img/share-image.png`}
        data-react-helmet="true"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" data-react-helmet="true" />
      <meta
        name="twitter:title"
        content={siteData.title}
        data-react-helmet="true"
      />
      <meta
        name="twitter:description"
        content={siteData.description}
        data-react-helmet="true"
      />
      <meta
        name="twitter:image:src"
        content={`${siteData.URL}/img/share-image.png`}
        data-react-helmet="true"
      />

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta
        property="og:title"
        content={siteData.title}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content={siteData.description}
        data-react-helmet="true"
      />
      <meta
        property="og:image"
        content={`${siteData.URL}/img/share-image.png`}
        data-react-helmet="true"
      />
      <meta property="og:url" content={siteData.URL} data-react-helmet="true" />
      <meta
        property="og:site_name"
        content={siteData.title}
        data-react-helmet="true"
      />
      <meta property="og:type" content="website" data-react-helmet="true" />
      <title data-react-helmet="true">{siteData.title}</title>
      <meta
        name="description"
        content={siteData.description}
        data-react-helmet="true"
      />
    </Head>
    <Body>
      {children}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-47174111-3"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', siteData.ga);
      </script>
    </Body>
  </Html>
)

export default {
  webpack,
  siteRoot,
  getSiteData: () => siteData,
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/App/pages/Home',
    },
  ],
  Document,
}
