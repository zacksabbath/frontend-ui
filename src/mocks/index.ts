const beatles = [
  {
    src: 'https://api.adorable.io/avatars/100/hello.png',
    alt: 'George Harrison',
  },
  { src: 'https://api.adorable.io/avatars/100/stump.png', alt: 'John Lennon' },
  { src: 'https://api.adorable.io/avatars/100/thing.png', alt: 'Ringo Starr' },
  { src: 'https://api.adorable.io/avatars/100/hi.png', alt: 'Paul McCartney' },
  {
    src: 'https://api.adorable.io/avatars/100/hello.png',
    alt: 'Pete Best',
  },
  {
    src: 'https://api.adorable.io/avatars/100/stump.png',
    alt: 'Stuart Sutcliff',
  },
  {
    src: 'https://api.adorable.io/avatars/100/thing.png',
    alt: 'George Martin',
  },
  {
    src: 'https://api.adorable.io/avatars/100/hi.png',
    alt: 'Billy whatshisface',
  },
];

const zzTop = [
  { src: 'https://api.adorable.io/avatars/100/hi.png', alt: 'Frank Beard' },
  { src: 'https://api.adorable.io/avatars/100/hi5.png', alt: 'Billy Gibbons' },
  { src: 'https://api.adorable.io/avatars/100/h8i.png', alt: 'Dusty Hill' },
];

const blackSabbath = [
  { src: 'https://api.adorable.io/avatars/100/fgsdfg.png', alt: 'Tony Iommi' },
  {
    src: 'https://api.adorable.io/avatars/100/fdgfdggfgfgs.png',
    alt: 'Geezer Butler',
  },
  {
    src: 'https://api.adorable.io/avatars/100/fgdfgdfgd.png',
    alt: 'Bill Ward',
  },
  {
    src: 'https://api.adorable.io/avatars/100/fgdfgdfgd.png',
    alt: 'Ozzy Osbourne',
  },
];

export { beatles as mockAvatars };

export const mockRaceGroup = [
  { candidates: beatles, title: 'Boulder City Council', date: 'Oct 4, 2017' },
  { candidates: zzTop, title: 'Boulder Other thing', date: 'Oct 6, 2019' },
];

export const mockRaceGroup2 = [
  {
    candidates: blackSabbath,
    title: 'Boulder County stuff',
    date: 'Oct 4, 2017',
  },
  { candidates: beatles, title: 'Boulder County other', date: 'Oct 4, 2017' },
  { candidates: zzTop, title: 'Boulder County', date: 'Oct 6, 2019' },
];

export const mockElection = [
  { location: 'Boulder City', races: mockRaceGroup },
  { location: 'Boulder County', races: mockRaceGroup2 },
];

export const mockInitiatives = [
  {
    name: 'City Requirement For Voting',
    issue: 'Suffrage',
    type: 'Initiative',
    votesFor: 5,
    votesAgainst: 6,
  },
  {
    name: 'Gray Wolf Reintroduction',
    issue: 'Hunting & Fishing',
    type: 'Initiative',
    votesFor: 5,
    votesAgainst: 6,
  },
  {
    name: 'National Popular Vote Interstate Compact Referendum',
    issue: 'Elections',
    type: 'Referendum',
    votesFor: 7,
    votesAgainst: 3,
  },
];

export const mockInitiativeGroup = {
  location: 'Colorado',
  date: 'Nov 3, 2020',
  initiatives: mockInitiatives,
};
