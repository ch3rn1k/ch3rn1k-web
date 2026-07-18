import type { ReactNode } from 'react';
import styles from './Widgets.module.css';

export const WidgetCard = ({
  children,
  wide,
  onClick
}: {
  children: ReactNode;
  wide?: boolean;
  onClick?: () => void;
}) => {
  const className = `${styles.card}${onClick ? ` ${styles.interactive}` : ''}${wide ? ` ${styles.wide}` : ''}`;

  if (onClick) {
    return (
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  return <div className={className}>{children}</div>;
};
