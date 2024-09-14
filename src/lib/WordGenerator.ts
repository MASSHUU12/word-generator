import { getRandomInt } from "./Random";
import { replaceAt } from "./StringHelpers";

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

function randCon(): string {
  return CONSONANTS[getRandomInt(0, CONSONANTS.length - 1)];
}

function randVow(): string {
  return VOWELS[getRandomInt(0, VOWELS.length - 1)];
}

function getRandomSyl(): string {
  let syl: string = "";

  switch (getRandomInt(0, 2)) {
    // case 0:
    //   syl += randVow();
    //   break;
    case 0:
      syl += randCon();
      syl += randVow();
      break;
    case 1:
      syl += randCon();
      syl += randVow();
      syl += randCon();
      break;
    case 2:
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

export function mutateWords(words: string[]): string[] {
  for (let i = 0; i < words.length; i++) {
    words[i] = mutateWord(words[i]);
  }

  return words;
}

function mutateChar(char: string): string {
  return VOWELS.indexOf(char) !== -1 ? randVow() : randCon();
}

function mutateWord(word: string): string {
  if (word.length === 0) {
    return word;
  }

  const index = getRandomInt(0, word.length - 1);
  let char = word[index];

  do {
    char = mutateChar(word[index]);
  } while (char === word[index]);

  return replaceAt(index, word, char);
}
