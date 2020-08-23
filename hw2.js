///https://edabit.com/challenge/StoCYdQvX2i7zaNLY

function checkFlush(table, hand) {
    let suit 
    if(hand[0][2] == hand[1][2]) suit = hand[0][2]
    else return false
    let dem = 0
    for(x of table) {
        if(x[2] == suit) ++dem
        if(x[2] == '_' && x[3] == suit) ++dem  
    }
    return dem > 2
}
