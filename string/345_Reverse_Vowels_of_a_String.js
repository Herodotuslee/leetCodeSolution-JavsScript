/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function(s) {

    let vowels = [];


    for(var i = 0 ; i< s.length ; i++){
        if((s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'||s[i]=='A'||s[i]=='E'||s[i]=='I'||s[i]=='O'||s[i]=='U')){
            vowels.push(s[i]);
        }
    }

   let  v = vowels.length - 1;

    var sArr = s.split("");
    for(var j = 0 ; j < sArr.length ; j++){
        if(s[j]=='a'||s[j]=='e'||s[j]=='i'||s[j]=='o'||s[j]=='u'||s[j]=='A'||s[j]=='E'||s[j]=='I'||s[j]=='O'||s[j]=='U'){
            sArr[j] = vowels[v];
            v -=1
        }
    }

    return sArr.join("");
};
