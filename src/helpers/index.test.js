import { getLetterMatchCount } from './index'

describe('getLetterMatchCount', () => {
    const secretWord='party';
    test('returns the correct count when there are no matching characters', () => {
        const letterMatchCount = getLetterMatchCount('hello',secretWord);
        expect(letterMatchCount).toBe(0)
    });
    test('returns the correct count when there are 3 matching characters', () => {
        const letterMatchCount = getLetterMatchCount('train',secretWord);
        expect(letterMatchCount).toBe(3)
    });
    test('returns the correct count when there are duplicate characters', () => {
        const letterMatchCount = getLetterMatchCount('tata',secretWord);
        expect(letterMatchCount).toBe(2)
    });
});