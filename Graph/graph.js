function Graph(v) {
    this.V = v;
    this.adj = new Array(4);
    for(let i=0; i<v; i++) {
        this.adj[i] = [];
    }
}

function addEdge(v, w) {
    this.adj[v].push(w);
}

function DFS(startWith) {
    const visited = new Array(this.V);
    for(let i=0; i<this.V; i++) {
        visited[i] = false;
    }
    DFSTraversal.bind(this)(startWith, visited);
}

function DFSTraversal(startWith, visited) {
    visited[startWith] = true;
    console.log(startWith);
    for(let i=0; i<this.adj[startWith].length; i++) {
        if(!visited[this.adj[startWith][i]]) {
            DFSTraversal.bind(this)(this.adj[startWith][i], visited);
        }
    }
}

function BFS(startWith) {
    const queue = [];
    queue.push(startWith);
    const visited = new Array(this.V);
    for(let i=0; i<this.V; i++) {
        visited[i] = false;
    }
    let currItem;
    while(queue.length) {
        currItem = queue.shift();
        console.log(currItem);
        visited[currItem] = visited;
        for(let i=0; i<this.adj[currItem].length; i++) {
            if(!visited[this.adj[currItem][i]]) {
                queue.push(this.adj[currItem][i]);
            }
        }
    }
}

const g = new Graph(4);
addEdge.bind(g)(0, 1);
addEdge.bind(g)(0, 2)
addEdge.bind(g)(1, 2)
addEdge.bind(g)(2, 0)
addEdge.bind(g)(2, 3)
addEdge.bind(g)(3, 3)
// g.addEdge(0, 2);
// g.addEdge(1, 2);
// g.addEdge(2, 0);
// g.addEdge(2, 3);
// g.addEdge(3, 3);

DFS.bind(g)(2);
BFS.bind(g)(2);

