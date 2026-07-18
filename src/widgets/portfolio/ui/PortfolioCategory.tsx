import { useInView } from '@/shared/lib/use-in-view';
import type { PortfolioEntry } from '@/shared/model/portfolio';
import { PortfolioItem } from './PortfolioItem';
import styles from './Portfolio.module.css';

export const PortfolioCategory = ({
  index,
  title,
  items,
  open,
  onToggle
}: {
  index: string;
  title: string;
  items: PortfolioEntry[];
  open: boolean;
  onToggle: () => void;
}) => {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={styles.category} data-visible={visible} data-open={open}>
      <button type="button" className={styles.categoryHead} onClick={onToggle} aria-expanded={open}>
        <span className={styles.categoryIndex}>{index}</span>
        <h3 className={styles.categoryTitle}>{title}</h3>
        <span className={styles.categoryCount}>{String(items.length).padStart(2, '0')}</span>
        <span className={styles.categoryChevron} aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>
      {open ? (
        <div className={styles.list}>
          {items.map((item) => (
            <PortfolioItem
              key={`${title}-${item.title}-${item.description}`}
              link={item.link}
              title={item.title}
              description={item.description}
              status={item.status}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
