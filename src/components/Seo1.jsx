import React from 'react';
import { Helmet } from 'react-helmet-async';

import metaTags from '../data/metaTags';

const Seo = ({ title }) => {
  return (
    <>
      <Helmet defer={false}>
        <title>{title}</title>

        {/* I) Primary Meta Tags */}
        <meta property="title" content="Ana Maria Gutierrez ART" />
        <meta
          property="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        />

        {/* II) Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ana Maria Gutierrez ART" />
        <meta property="og:site_name" content="Ana Maria Gutierrez ART" />
        <meta
          property="og:description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        />
        <meta
          property="og:image"
          content="https://anamariagutierrez.art/assets/preview.jpeg"
        />
        <meta property="og:url" content="https://www.anamariagutierrez.art/" />

        {/* III) Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ana Maria Gutierrez ART" />
        <meta
          name="twitter:description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        />
        <meta
          property="twitter:image"
          content="https://anamariagutierrez.art/assets/preview.jpeg"
        />
        <meta name="twitter:url" content="https://www.anamariagutierrez.art/" />
      </Helmet>
    </>
  );
};

export default Seo;
