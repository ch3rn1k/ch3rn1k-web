export type PortfolioStatus = 'on' | 'off' | 'private';

export interface PortfolioEntry {
  link?: string;
  title: string;
  description: string;
  status?: PortfolioStatus;
}
