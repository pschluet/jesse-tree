export interface ReadingDay {
  day: number;
  title: string;
  ornamentName: string;
  bibleVerses: string;
  readingText: string;
}

export const readings: ReadingDay[] = [
  {
    day: 1,
    title: 'Creation of Universe',
    ornamentName: 'Sun',
    bibleVerses: 'Genesis 1-2:4',
    readingText: `If the the world has a beginning, and if it has been created, enquire who gave it this beginning, and who was the Creator: or rather, in the fear that human reasonings may make you wander from the truth, Moses has anticipated enquiry by engraving in our hearts, as a seal and a safeguard, the awful name of God: 'In the beginning God created' - It is He, beneficent Nature, Goodness without measure, a worthy object of love for all beings endowed with reason, the beauty the most to be desired, the origin of all that exists, the source of life, intellectual light, impenetrable wisdom, it is He who 'in the beginning created heaven and earth.'`,
  },
  {
    day: 2,
    title: 'Creation of Man',
    ornamentName: 'Two People',
    bibleVerses: 'Genesis 2:4-25',
    readingText: `The sun was formed by a mere command, but man by God's hands: 'Let us make man after our image, and after our likeness' (Gen. 1:26). A wooden image of an earthly king is held in honor; how much more a rational image of God? (St. Cyril of Jerusalem, Catechetical Lectures: Lecture 12 no. 5)`,
  },
];
