///https://edabit.com/challenge/84jqLSWr288Wqx5eH
function digitaldrome(n) {
    const digits = [...`${n}`]
    const diff = digits.slice(1).map((d, i) => d - digits[i])
    
    if (diff.every(d => d === 0)) return "Repdrome"
    if (diff.every(d => d >   0)) return "Metadrome"
    if (diff.every(d => d >=  0)) return "Plaindrome"
    if (diff.every(d => d <   0)) return "Katadrome"
    if (diff.every(d => d <=  0)) return "Nialpdrome"
    return "Nondrome"
}
