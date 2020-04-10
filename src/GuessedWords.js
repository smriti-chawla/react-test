import React from 'react';
import PropTypes, {shape} from 'prop-types';

const GuessedWords = (props) => {
    const guessedWordsRow = props.guessedWords.map((word, index) => {
        return <tr key={index}>
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
        </tr>
    });
    return <div data-test="component-guessed-words">
        {props.guessedWords.length == 0 ? <span data-test="guess-instructions">Try to guess the secret word!</span> :
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr><th>Guess</th><th>Matching Letter</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordsRow}
                    </tbody>
                </table>
            </div>}
    </div>
};

GuessedWords.propTypes ={
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired
};

export default GuessedWords;