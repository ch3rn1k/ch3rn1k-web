import type { PortfolioStatus } from '@/shared/model/portfolio';
import styles from './StatusDot.module.css';

export const StatusDot = ({ status, pulse = false }: { status?: PortfolioStatus; pulse?: boolean }) => (
  <span className={styles.dot} data-status={status} data-pulse={pulse || status === 'on'} aria-hidden />
);
