import TutorSection from '../components/TutorSection/TutorSection';
import { tutors } from '../data/tutors';
import styles from './CallsScreen.module.css';

function CallsScreen() {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Recent calls</h1>
            <div>
                {tutors.map((tutor) => (
                    <TutorSection
                        key={tutor.id}
                        tutor={tutor}
                        onCallClick={(tutorId) => console.log('Start call:', tutorId)}
                        onTutorInfoClick={(tutorId) => console.log('Open tutor details:', tutorId)}
                        onCallInfoClick={(callId) => console.log('Open call details:', callId)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CallsScreen;
