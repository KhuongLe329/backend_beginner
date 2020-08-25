/// https://edabit.com/challenge/JpfNfZCEesy7Nz67i
function extractPrimes(num) {
    const prime = (n) => {
        if(n < 2) return 0
        for(let i = 2; i * i <= n; ++i) if(n % i == 0) return 0
        return 1
    }
    let digits = [...`${num}`], ans = []
    for(let i = 0; i < digits.length; ++i) {
        let cur = 0
        if(Number(digits[i]) == 0) continue
        for(let j = i; j < digits.length; ++j) {
            cur = cur * 10 + Number(digits[j])
            if(prime(cur)) ans.push(cur)
        }
    }
    ans.sort((a, b) => a - b)
    return ans 
}
