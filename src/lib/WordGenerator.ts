import { getRandomInt } from "./Random";

const VOWELS = "aeiou";
const CONSONANTS = "bcdfghjklmnpqrstvwxyz";

export function generateWords(
  words: number,
  minSyl: number,
  maxSyl: number,
): string[] {
  const generatedWords: string[] = [];

  for (let i = 0; i < words; i++) {
    generatedWords.push(generateWord(maxSyl, minSyl));
  }

  return generatedWords;
}

function getRandomSyl(): string {
  let syl: string = "";

  const randCon = () => CONSONANTS[getRandomInt(0, CONSONANTS.length - 1)];
  const randVow = () => VOWELS[getRandomInt(0, VOWELS.length - 1)];

  switch (getRandomInt(0, 3)) {
    case 0:
      syl += randVow();
      break;
    case 1:
      syl += randCon();
      syl += randVow();
      break;
    case 2:
      syl += randCon();
      syl += randVow();
      syl += randCon();
      break;
    case 3:
      syl += randVow();
      syl += randCon();
      break;
  }

  return syl;
}

function generateWord(minSyl: number, maxSyl: number): string {
  let word: string = "";
  const syl: number = getRandomInt(minSyl, maxSyl);

  for (let j = 0; j < syl; j++) {
    word += getRandomSyl();
  }

  return word;
}
