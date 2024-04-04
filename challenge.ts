/**
 * @param inputString - input string that can be rearranged
 * @param dictionary - input array of strings that make up the dictionary for input string
 * @returns - array of all strings from dictionary that can be made from input string
 */

const findWords = (inputString: string, dictionary: string[]): string[] => {
  // initialize result array and input letter map
  let res: string[] = [];
  let inputMap: Map<string, number> = createLetterMap(inputString);

  // for each word in dictionary, check and add words that are subsets of inputString
  for (let i = 0; i < dictionary.length; i++) {
    let word = dictionary[i];
    if (isSubSet(word, inputMap)) res.push(word);
  }

  return res;
};

// Helper functions

/**
 * @param word
 * @returns - letter map of input word with char to # of occurrences of char
 * @example - createLetterMap('doggo') should return Map({ 'd': 1, 'o': 2, 'g': 2 })
 */

const createLetterMap = (word: string): Map<string, number> => {
  let letterMap: Map<string, number> = new Map();

  // iterate through word and add instances to letterMap
  for (let char of word) {
    if (letterMap.has(char))
      letterMap.set(char, (letterMap.get(char) || 0) + 1);
    else letterMap.set(char, 1);
  }

  return letterMap;
};

/**
 * @param word - smaller set of characters
 * @param largeDict - larger set of characters
 * @returns - boolean indicating whether large set contains all of small set
 */

const isSubSet = (word: string, letterMap: Map<string, number>): boolean => {
  let inputWordLetterMap: Map<string, number> = createLetterMap(word);

  // compare each letter in inputWordLetterMap to letterMap, return false if letter count is greater or char not in letterMap
  for (let [key, value] of inputWordLetterMap) {
    if (!letterMap.has(key)) return false;
    if (value > (letterMap.get(key) || 0)) return false;
  }
  return true;
};

// Test cases
interface TestCase {
  inputWord: string;
  inputDict: string[];
  output: string[];
}

let testCases: TestCase[] = [
  { inputWord: "", inputDict: ["a", "b"], output: [] },
  { inputWord: "a", inputDict: ["a", "b"], output: ["a"] },
  {
    inputWord: "doggo",
    inputDict: ["dog", "godo", "goood", "cat"],
    output: ["dog", "godo"],
  },
  {
    inputWord: "oogd",
    inputDict: ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
    output: ["dog", "do", "god", "goo", "go", "good"],
  },
  {
    inputWord: "ate",
    inputDict: ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
    output: ["ate", "eat", "tea"],
  },
];

for (let test of testCases) {
  console.log("Input: ", test.inputWord, test.inputDict);
  console.log("Expected: ", test.output);
  console.log("Result: ", findWords(test.inputWord, test.inputDict));
}
