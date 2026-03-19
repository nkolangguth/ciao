import type { CSSProperties } from 'react';

type IconProps = {
  /** Remix icon name, e.g. "phone-fill" or full class "ri-phone-fill" */
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
  style?: CSSProperties;
};

export function Icon({ name, size = 20, color, className, style }: IconProps) {
  const remixClass = name.startsWith('ri-') ? name : `ri-${name}`;

  const mergedStyle: CSSProperties = {
    fontSize: size,
    color,
    lineHeight: 1,
    display: 'inline-block',
    ...style,
  };

  return <i className={[remixClass, className].filter(Boolean).join(' ')} style={mergedStyle} />;
}

export default Icon;
