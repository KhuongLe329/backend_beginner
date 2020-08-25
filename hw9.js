/// https://edabit.com/challenge/npLurjMJofmFRCJwx
const words = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

function letterCombinations(digits) {
    let ans = [], s = ''
    function backtrack(n) {
        if(n >= digits.length) {
            ans.push(s)
            return;
        }
        for(let x of words[digits[n]]) {
            s += x 
            backtrack(n + 1)
            s = s.slice(0, -1)
        }
    }
    backtrack(0)
    return ans 
}
