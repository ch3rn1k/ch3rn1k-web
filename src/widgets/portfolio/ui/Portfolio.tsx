import { useState } from 'react';
import { useTranslation } from '@/shared/lib/i18n';
import { getPortfolioData } from '../model/data';
import { PortfolioCategory } from './PortfolioCategory';
import { PortfolioContact } from './PortfolioContact';
import styles from './Portfolio.module.css';

export const Portfolio = () => {
  const translation = useTranslation();
  const data = getPortfolioData(translation.key);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const categories = [
    { key: 'discord', index: '01', title: translation.portfolio.categories.discord, items: data.discord },
    { key: 'telegram', index: '02', title: translation.portfolio.categories.telegram, items: data.telegram },
    { key: 'desktop', index: '03', title: translation.portfolio.categories.desktop, items: data.desktop },
    { key: 'mobile', index: '04', title: translation.portfolio.categories.mobile, items: data.mobile },
    { key: 'web', index: '05', title: translation.portfolio.categories.web, items: data.web },
    { key: 'others', index: '06', title: translation.portfolio.categories.others, items: data.others }
  ];

  return (
    <section id="apps" className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{translation.portfolio.title}</h2>
        <p className={styles.subtitle}>{translation.portfolio.subtitle}</p>
      </div>

      {categories.map((cat) => (
        <PortfolioCategory
          key={cat.key}
          index={cat.index}
          title={cat.title}
          items={cat.items}
          open={!collapsed[cat.key]}
          onToggle={() => setCollapsed((prev) => ({ ...prev, [cat.key]: !prev[cat.key] }))}
        />
      ))}

      <PortfolioContact />
    </section>
  );
};
