import { useState } from 'react';
import type { Tutor } from '../../data/tutors';
import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';
import IconButton from '../IconButton/IconButton';
import CallRow from '../CallRow/CallRow';
import styles from './TutorSection.module.css';

type TutorSectionProps = {
  tutor: Tutor;
  onCallClick?: (tutorId: string) => void;
  onTutorInfoClick?: (tutorId: string) => void;
  onCallInfoClick?: (callId: string) => void;
};

export default function TutorSection({
  tutor,
  onCallClick,
  onTutorInfoClick,
  onCallInfoClick,
}: TutorSectionProps) {
  const [expanded, setExpanded] = useState<boolean>(tutor.expanded);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.avatar}>
            <Avatar src={tutor.avatar} alt={tutor.name} size={56} />
          </div>

          <div className={styles.textBlock}>
            <div className={styles.nameRow}>
              <span className={styles.name}>{tutor.name}</span>
              <span className={styles.streak}>
                <Icon name="fire-fill" size={14} color="var(--color-semantic-streak)" />
                {tutor.streak}
              </span>
            </div>
            <span className={styles.subtitle}>{tutor.subtitle}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.chevronButton}
            onClick={toggleExpanded}
            aria-expanded={expanded}
            aria-label={expanded ? 'Collapse calls' : 'Expand calls'}
          >
            <span
              className={[
                styles.chevron,
                expanded ? styles.chevronExpanded : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <Icon name="arrow-down-s-line" size={18} />
            </span>
          </button>
          <IconButton
            icon="information-line"
            variant="info"
            aria-label="Tutor info"
            onClick={() => onTutorInfoClick?.(tutor.id)}
          />
          <IconButton
            icon="phone-fill"
            variant="call"
            aria-label="Start call"
            onClick={() => onCallClick?.(tutor.id)}
          />
        </div>
      </div>

      {expanded && (
        <div className={styles.calls}>
          {tutor.calls.map((call) => (
            <CallRow
              key={call.id}
              call={call}
              onInfoClick={onCallInfoClick}
            />
          ))}
        </div>
      )}
    </section>
  );
}
