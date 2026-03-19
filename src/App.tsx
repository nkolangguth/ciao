import CallsScreen from './screens/CallsScreen';
import TutorsScreen from './screens/TutorsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useState } from 'react';
import styles from './layouts/AppShell.module.css';
import GlobalNav from './components/GlobalNav/GlobalNav';

function App() {
  const [activeTab, setActiveTab] = useState<'calls' | 'tutors' | 'profile'>('calls');

  return (
    <div className={styles.shell}>
      {activeTab === 'calls' && <CallsScreen />}
      {activeTab === 'tutors' && <TutorsScreen />}
      {activeTab === 'profile' && <ProfileScreen />}
      <GlobalNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
