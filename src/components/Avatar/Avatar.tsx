import styles from './Avatar.module.css';

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
};

export default function Avatar({ src, alt, size = 56 }: AvatarProps) {
  return (
    <img
      className={styles.avatar}
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  );
}

