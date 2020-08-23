/// https://edabit.com/challenge/iYcNv2tDvNgnSsG9S
function isMagicSquare(square) {
    let n = square.length, sum = 0, cur, sum1 = 0, sum2 = 0
    if(n == 1) return true
    for(let i = 0; i < n; ++i) sum += square[0][i]
    for(let i = 0; i < n; ++i) {
        cur = 0 
        sum1 += square[i][i]
        sum2 += square[i][n - i - 1]
        for(let j = 0; j < n; ++j) cur += square[i][j]
        if(cur != sum) return false 
        cur = 0 
        for(let j = 0; j < n; ++j) cur += square[j][i]
        if(cur - sum) return false 
    }
    return sum1 == sum && sum2 == sum
}
