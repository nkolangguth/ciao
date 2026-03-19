import type { Call } from '../../data/tutors';
import IconButton from '../IconButton/IconButton';
import styles from './CallRow.module.css';

type CallRowProps = {
  call: Call;
  onInfoClick?: (callId: string) => void;
};

export default function CallRow({ call, onInfoClick }: CallRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.textBlock}>
        <div className={styles.time}>{call.time}</div>
        <div className={styles.duration}>{call.duration}</div>
      </div>

      <div className={styles.actions}>
        <IconButton
          icon="information-fill"
          variant="info"
          size={40}
          aria-label="Call info"
          onClick={() => onInfoClick?.(call.id)}
        />
      </div>
    </div>
  );
}

