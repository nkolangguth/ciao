import type { CSSProperties, MouseEventHandler } from 'react';
import Icon from '../Icon/Icon';
import styles from './IconButton.module.css';

type IconButtonProps = {
  icon: string;
  onClick?: () => void;
  variant?: 'call' | 'info';
  size?: number;
  'aria-label'?: string;
};

export default function IconButton({
  icon,
  onClick,
  variant = 'call',
  size = 40,
  'aria-label': ariaLabel,
}: IconButtonProps) {
  const buttonStyle: CSSProperties = {
    width: size,
    height: size,
  };

  const iconSize = Math.round(size * 0.5);
  const iconColor =
    variant === 'call' ? 'var(--text-inverse)' : 'var(--text-primary)';

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      className={[styles.button, variant === 'call' ? styles.call : styles.info]
        .filter(Boolean)
        .join(' ')}
      style={buttonStyle}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <Icon name={icon} size={iconSize} color={iconColor} />
    </button>
  );
}

