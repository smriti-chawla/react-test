/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - guessed word.
 * @param {string} secretWord - secret word.
 * @return {number} - number of matching letter between guessed word and secret word.
 */

export function getLetterMatchCount(guessedWord, secretWord) {
    const guessedWordSet = new Set(guessedWord);
    const secretWordSet = new Set(secretWord);
    return [...secretWordSet].filter(letter => guessedWordSet.has(letter)).length


}