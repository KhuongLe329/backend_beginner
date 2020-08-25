/// https://edabit.com/challenge/eWXL8Jz78hP5tW644
function resist(net) {
	const ser = (...args) => args.reduce((a,v) => a + v, 0);
	const par = (...args) => 1 / (args.reduce((a,v) => a + 1/v, 0));
	let tot = eval(net.replace(/\(/g, 'ser(').replace(/\[/g, 'par(').replace(/\]/g, ')'));
	return +tot.toFixed(1);
}

function resist(net) {
    let queue = [], cur = 0
    for(let x of net) {
        if(x == '[' || x == '(') {
            queue.push(x)
            cur = 0
        } else if(x == ']') {
            if(cur) queue.push(cur)
            let ans = 0 
            while(queue[queue.length - 1] !== '[') {
                ans += 1.0 / queue[queue.length - 1]
                queue.pop()
            } 
            queue.pop()
            queue.push(1.0 / ans)
            cur = 0
        } else if(x == ')') {
            if(cur) queue.push(cur)
            let ans = 0 
            while(queue[queue.length - 1] !== '(') {
                ans += queue[queue.length - 1]
                queue.pop()
            } 
            queue.pop()
            queue.push(ans)
            cur = 0
        } else if(x == ',') {
            if(cur) queue.push(cur), cur = 0
        } else if(x != ' ') cur = cur * 10 + Number(x)
    }
    if(queue[0].toFixed(1) - queue[0].toFixed(0) == 0) return Number(queue[0].toFixed(0))
    return Number(queue[0].toFixed(1))
}
