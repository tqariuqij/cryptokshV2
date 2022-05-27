import React from 'react';
import Header from './Header';
import { NextSeo } from 'next-seo';

const Layout = ({ children }) => (
  <>
    <NextSeo
      title='CryptoKsh'
      titleTemplate='CrypoKsh'
      defaultTitle='CrypoKsh'
      description='The ultimate cryptocurrency blog for the latest news, education and information to help you navigate the crypto world'
      canonical='https://www.avneesh.tech/'
      openGraph={{
        url: 'https://www.crptoksh.vercel.com',
        title: 'CrypoKsh',
        description:
          'The ultimate cryptocurrency blog for the latest news, education and information to help you navigate the crypto world',
      }}
      twitter={{
        handle: '@tqariuqij',
        site: '@tqariuqij',
        cardType: 'summary_large_image',
      }}
    />

    <Header />
    {children}
  </>
);

export default Layout;
