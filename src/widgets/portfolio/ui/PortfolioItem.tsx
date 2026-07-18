import { StatusDot } from '@/shared/ui/status-dot';
import type { PortfolioStatus } from '@/shared/model/portfolio';
import styles from './PortfolioItem.module.css';

const statusText = (status?: PortfolioStatus) => {
  if (status === 'on') return 'ON';
  if (status === 'off') return 'OFF';
  if (status === 'private') return 'PVT';
  return '—';
};

export const PortfolioItem = ({
  link,
  title,
  description,
  status
}: {
  link?: string;
  title: string;
  description: string;
  status?: PortfolioStatus;
}) => {
  const content = (
    <>
      {status ? <StatusDot status={status} /> : <span className={styles.emptyDot} aria-hidden />}
      <div className={styles.meta}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <span className={styles.statusLabel}>{statusText(status)}</span>
    </>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={`${styles.row} ${styles.rowLink}`}>
        {content}
      </a>
    );
  }

  return <div className={styles.row}>{content}</div>;
};
