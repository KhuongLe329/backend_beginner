///https://edabit.com/challenge/Q7foiyejfJG6pqqws
function bucketize(phrase, n) {
    let words = phrase.split(' ')
    let ans = [], cur = ''
    for(let x of words) {
        if(x.length > n) return []
        if(x.length + cur.length + (cur.length != 0) <= n) {
            if(cur.length) cur += ' '
            cur += x
        } else {
            ans.push(cur)
            cur = x 
        }
    }
    if(cur.length > 0) ans.push(cur)
    return ans 
}
