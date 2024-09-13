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

function generateWord(minSyl: number, maxSyl: number): string {
  let word: string = "";
  const syl: number = getRandomInt(minSyl, maxSyl);

  for (let j = 0; j < syl; j++) {
    word += CONSONANTS[getRandomInt(0, CONSONANTS.length - 1)];
    word += VOWELS[getRandomInt(0, VOWELS.length - 1)];
  }

  return word;
}
