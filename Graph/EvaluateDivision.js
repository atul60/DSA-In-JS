/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};
    equations.forEach(([n1, n2], index) => {
        if(!graph[n1]) graph[n1] = [];
        if(!graph[n2]) graph[n2] = [];
        graph[n1].push([n2, values[index]]);
        graph[n2].push([n1, 1/values[index]]);
    })

    const dfs = (start, end, visited) => {
        if(!(graph[start] && graph[end])) return -1.0;
        if(start === end) return 1.0;
        visited.add(start);
        graph[start].forEach(([neighbor, val]) => { // for (const [neighbor, val] of graph[start])
            if(!visited.has(neighbor)) {
                const result = dfs(neighbor, end, visited);
                if(result !== -1.0) {
                    return result*val;
                }
            }
        })
        return -1.0;
    }

    const result = queries.map(([n1, n2]) => {
        if (n1 === n2 && graph[n1]) return 1.0;
        return dfs(n1, n2, new Set());
    }) 
    return result;
};
