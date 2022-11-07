/* 
    * 1189. Maximum Number of Balloons
    * Given a string text you want to use the characters of
    * text to form as many instances of the word "balloon" as possible.
    *
    * You can use each character in text at most once.
    * Return the maximum number of instances that can be formed.
    *
    * Example 1:
    * Input: text = "nlaebolko"
    * Output: 1
    *
    * Example 2:
    * Input: text = "loonbalxballpoon"
    * Output: 2
    *
    * Example 3:
    * Input: text = "leetcode"
    * Output: 0
    * @param {string} text
    * @return {number}
*/

const Balloons = (text, word = "balloon") => {
    if ( text.length < word.length ) return 0;
    let count = Infinity;
    let wordDict = {};
    let textDict = {};

    // {b: 1, c: 2, d: 2}
    for(let letter of word){ // word[0]
        wordDict.hasOwnProperty(letter) ? 
            wordDict[letter]++ : 
            wordDict[letter] = 1;
    }

    for(let letter of text){
        textDict.hasOwnProperty(letter) ? 
            textDict[letter]++ : 
            textDict[letter] = 1;
    }

    console.log('text', textDict);
    console.log('words', wordDict);
    console.log('keys', Object.keys(wordDict));
    
    for(let key of Object.keys(wordDict)){
        let c = textDict[key];
        if (!c) c = 0;

        let newAmount = Math.floor(c / wordDict[key]);

        if(count > newAmount){
            count = newAmount;
        }
    }

    return count;
}

console.log(Balloons("ytruyturyturyturyturtyr", "abc"));