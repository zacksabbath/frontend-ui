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

export { beatles as mockAvatars };

export const mockRaceGroup = [
  { candidates: beatles, title: 'Boulder City Council', date: 'Oct 4, 2017' },
  { candidates: zzTop, title: 'Boulder House of Pain', date: 'Oct 6, 2019' },
];
