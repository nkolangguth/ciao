import juliaAvatar from '../assets/Julia-profile.png';
import mateoAvatar from '../assets/Mateo-profile.png';

export type Call = {
  id: string;
  time: string;
  duration: string;
};

export type Tutor = {
  id: string;
  name: string;
  avatar: string;
  streak: number;
  subtitle: string;
  calls: Call[];
  expanded: boolean;
};

function makeCalls(prefix: string): Call[] {
  return [
    { id: `${prefix}-1`, time: 'Thursday, 14:15 PM', duration: '15m 12s' },
    { id: `${prefix}-2`, time: 'Thursday, 14:15 PM', duration: '15m 12s' },
    { id: `${prefix}-3`, time: 'Thursday, 14:15 PM', duration: '15m 12s' },
    { id: `${prefix}-4`, time: 'Thursday, 14:15 PM', duration: '15m 12s' },
  ];
}

export const tutors: Tutor[] = [
  {
    id: 'julia',
    name: 'Julia',
    avatar: juliaAvatar,
    streak: 23,
    subtitle: 'Spanish Tutor 🇪🇸',
    calls: makeCalls('julia'),
    expanded: true,
  },
  {
    id: 'mateo',
    name: 'Mateo',
    avatar: mateoAvatar,
    streak: 1,
    subtitle: 'Spanish Tutor 🇪🇸',
    calls: makeCalls('mateo'),
    expanded: true,
  },
];
