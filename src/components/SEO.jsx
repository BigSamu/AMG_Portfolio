import React from 'react';
import { Helmet } from 'react-helmet-async';

import avatar_1 from '/assets/avatar_1.jpeg';
import metaTags from '../data/metaTags';

const SEO = ({ title }) => {
  return (
    <>
      <Helmet defer={false}>
        
        <title>{title}</title>
        {/* <meta name="title" content={metaTags.title} />
        <meta name="description" content={metaTags.description} />

    
        <meta property="og:type" content={metaTags.type} />
        <meta property="og:title" content={metaTags.title} />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:image" content={metaTags.image} />
        <meta property="og:url" content={metaTags.url} />
        <meta property="og:site_name" content="AMG ART" />

      
        <meta name="twitter:creator" content={metaTags.name} />
        <meta name="twitter:card" content={metaTags.type} />
        <meta name="twitter:title" content={metaTags.title} />
        <meta name="twitter:description" content={metaTags.description} /> */}
      </Helmet>
    </>
  );
};

export default SEO;
