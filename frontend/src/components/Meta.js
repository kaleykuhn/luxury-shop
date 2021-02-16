import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: 'Welcome to LuxuryShop',
  description: 'We sell luxury bags of the finest quality',
  keywords: 'handbags, purses, clutches, buy luxury bags, high end bags',
};
export default Meta;
