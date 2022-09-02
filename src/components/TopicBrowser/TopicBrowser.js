import React from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd.js';
import FilterString from '../Topics/FilterString';
import FilterObject from '../Topics/FilterObject.js';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

// Topics

function TopicBrowser () {
        return (
            <div className='puzzleFeed'>
                <EvenAndOdd/>
                <FilterObject/>
                <FilterString/>
                <Palindrome/>
                <Sum/>
            </div>
        );
    }

    export default TopicBrowser;