/// https://edabit.com/challenge/qQu4kxTEHapogmCgE
function navigate(roads, startingNode, endingNode) { 
    const inf = 1000000000  
    let directed = roads.graph.directed, n = roads.graph.nodes.length
    let adj = {}, queue = [], inq = [], dist = [], trace = [], cnt = 0
    for(let i = 0; i < 100; ++i) {
        adj[i] = new Array()
        inq.push(0), dist.push(inf), trace.push(-1)
    }
    for(let e of roads.graph.edges) {
        let edge = new Object()
        edge.v = e.target, edge.w = e.metadata.distance
        adj[e.source].push(Object.assign({}, edge))
        if(!directed) {
          edge.v = e.source
          adj[e.target].push(Object.assign({}, edge))
        }
    }
    queue.push(startingNode), dist[startingNode] = 0, inq[startingNode] = 1, trace[startingNode] = -1
    while(queue.length) {
        let top = queue[0]
        //console.log(top + ' ' + dist[top])
        queue.shift()
        inq[top] = 0
        for(let x of adj[top]) {
            if(dist[x.v] > dist[top] + x.w) {
                dist[x.v] = dist[top] + x.w 
                trace[x.v] = top 
                if(!inq[x.v]) {
                    queue.push(x.v)
                    inq[x.v] = 1
                }
            }
        }
    }
    let ans = {"distance": dist[endingNode], "path": []}
    let cur = endingNode 
    while(cur >= 0) {
        ans.path.push(cur)
        cur = trace[cur]
    }
    ans.path.reverse()
    return ans
}
