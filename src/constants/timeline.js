import { HiOutlineRocketLaunch, HiOutlineGlobeAlt, HiOutlineHomeModern, HiOutlineSparkles as HiOutlineMars, HiOutlineStar } from 'react-icons/hi2';

export const timeline = [
  { id: 1, phase: 'Launch', icon: HiOutlineRocketLaunch, year: '2025', desc: 'Vehicle assembly, testing, and liftoff from primary launch complex.' },
  { id: 2, phase: 'Orbit', icon: HiOutlineGlobeAlt, year: '2025', desc: 'Stable low-Earth orbit insertion and systems checkout.' },
  { id: 3, phase: 'Moon Base', icon: HiOutlineHomeModern, year: '2026', desc: 'Rendezvous with lunar gateway and surface base construction.' },
  { id: 4, phase: 'Mars', icon: HiOutlineMars, year: '2027', desc: 'Transfer orbit burn and interplanetary cruise phase to Mars.' },
  { id: 5, phase: 'Deep Space', icon: HiOutlineStar, year: '2029', desc: 'Extended autonomous exploration beyond the asteroid belt.' },
];