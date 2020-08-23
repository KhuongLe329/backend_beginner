function check(x, y) {
    for(let i = 0; i < 3; ++i) if(x[i] != y[i]) return 0
    return 1
}

function waterjug(lim, goal) {
    let s = [0, 0, lim[2]]
    let queue = [], vis = []
    let dis = new Map()
    queue.push(s), vis.push(s), dis.set(s, 0) 
    while(queue.length > 0) {
        let d = dis.get(queue[0])
        if(check(queue[0].slice(0), goal)) return d
        for(let i = 0; i < 3; ++i) {
            for(let j = 0; j < 3; ++j) {
                if(i != j) {
                    let tmp = queue[0].slice(0)
                    if(tmp[i] >= lim[j] - tmp[j]) {
                        tmp[i] = tmp[i] - (lim[j] - tmp[j])
                        tmp[j] = lim[j]
                    } else {
                        tmp[j] += tmp[i]
                        tmp[i] = 0
                    }
                    let ok = 1
                    //console.log(vis)
                    for(let j = 0; j < vis.length; ++j) {
                        let okk = 1
                        for(let i = 0; i < 3; ++i) okk &= (vis[j][i] == tmp[i])
                        if(okk) ok = 0
                    }
                    if(ok) {
                        //console.log(tmp)
                        dis.set(tmp, d + 1)
                        queue.push(tmp)
                        vis.push(tmp)    
                    }
                }
            }
        } 
        queue.shift()
    }
    return "No solution."
}

//console.log(waterjug([3, 5, 8], [0, 3, 5]))
