import sampleSize from 'lodash.samplesize';
import words from './ord.json';
import $ from 'jquery';
window.$ = $;
window.jQuery = $;
window.genWords = (amnt) => {
    return sampleSize(words, amnt);
}
