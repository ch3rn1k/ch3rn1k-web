import { useState } from 'react';
import { StatusDot } from '@/shared/ui/status-dot';
import { useTranslation } from '@/shared/lib/i18n';
import styles from './Portfolio.module.css';

export const PortfolioContact = () => {
  const translation = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyHandle = async () => {
    try {
      await navigator.clipboard.writeText('@ch3rn1k');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactMeta}>
        <div className={styles.contactLabel}>
          <StatusDot status="on" pulse />
          {translation.portfolio.contactLabel}
        </div>
        <div className={styles.contactTitle}>{translation.portfolio.contactTitle}</div>
        <button type="button" className={styles.contactHandle} onClick={copyHandle} aria-label="@ch3rn1k">
          @ch3rn1k
          <span className={styles.copyHint} data-copied={copied}>
            {copied ? translation.portfolio.copied : translation.portfolio.copy}
          </span>
        </button>
      </div>
      <a href="https://t.me/ch3rn1k" target="_blank" rel="noreferrer" className={styles.contactCta}>
        {translation.portfolio.contactCta} →
      </a>
    </div>
  );
};
