export interface ReadingData {
  day: number;
  title: string;
  ornamentName: string;
  bibleVerses: string;
  readingText: string;
}

export const readings: ReadingData[] = [
  {
    day: 1,
    title: 'Creation of Universe',
    ornamentName: 'Sun',
    bibleVerses: 'Genesis 1-2:4',
    readingText: `If the the world has a beginning, and if it has been created, enquire who gave it this beginning, and who was the Creator: or rather, in the fear that human reasonings may make you wander from the truth, Moses has anticipated enquiry by engraving in our hearts, as a seal and a safeguard, the awful name of God: 'In the beginning God created' - It is He, beneficent Nature, Goodness without measure, a worthy object of love for all beings endowed with reason, the beauty the most to be desired, the origin of all that exists, the source of life, intellectual light, impenetrable wisdom, it is He who 'in the beginning created heaven and earth.'`,
  },
];
