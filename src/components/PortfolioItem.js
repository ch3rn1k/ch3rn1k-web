import React from 'react';

const PortfolioItem = ({ link, title, description, status }) => {
  /** TEMPLATE */
  return (
    <a href={link} target="_blank" className={`portfolio-container--item ${status}`} rel="noreferrer" tabIndex={0}>
      {title}
      <span>{description}</span>
    </a>
  );
};

export default PortfolioItem;
