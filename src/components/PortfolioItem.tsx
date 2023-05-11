const PortfolioItem = ({ link, title, description, status }: { link?: string; title?: string; description?: string; status?: string }) => {
  return (
    <a href={link} target="_blank" className={`portfolio-container--item ${status}`} rel="noreferrer" tabIndex={0}>
      {title}
      <span>{description}</span>
    </a>
  );
};

export default PortfolioItem;
