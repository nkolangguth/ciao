import Icon from '../Icon/Icon';
import styles from './GlobalNav.module.css';

type Tab = 'calls' | 'tutors' | 'profile';

type GlobalNavProps = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

function getTabMeta(tab: Tab) {
  switch (tab) {
    case 'calls':
      return { label: 'Recents', icon: 'history-line' };
    case 'tutors':
      return { label: 'Tutors', icon: 'graduation-cap-line' };
    case 'profile':
      return { label: 'Profile', icon: 'user-3-line' };
  }
}

export default function GlobalNav({ activeTab, onTabChange }: GlobalNavProps) {
  return (
    <nav className={styles.nav} aria-label="Bottom navigation">
      {(['calls', 'tutors', 'profile'] as const).map((tab) => {
        const { label, icon } = getTabMeta(tab);
        const isActive = tab === activeTab;

        return (
          <button
            key={tab}
            type="button"
            className={[styles.tab, isActive ? styles.tabActive : '']
              .filter(Boolean)
              .join(' ')}
            onClick={() => onTabChange(tab)}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className={styles.icon}>
              <Icon name={icon} size={22} color="var(--color-white)" />
            </span>
            <span className={styles.label}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

