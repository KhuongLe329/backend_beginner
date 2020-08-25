/// https://edabit.com/challenge/zadc59oCm9Hj5xnrh
function minPalindromeSteps(str) {
    for(let i = 0; i < str.length; ++i) {
        let cur = str.substr(i)
        let rev = cur.split('').reverse().join('')
        if(cur == rev) return i
    }
}
