class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     * 1.De
     */
    findOrder(numCourses, prerequisites) {
    let adj = Array.from({length: numCourses},() => []);
    let indegree = new Array(numCourses).fill(0);

    for(const [course,pre] of prerequisites){
        adj[pre].push(course);
        indegree[course]++;
    }
    let order = []
    let pindex = 0 ;
    let q = [];

    for(let i = 0 ; i < numCourses; i++){
        if(indegree[i] === 0)q.push(i);
    };
    while(pindex < q.length){
        let node = q[pindex++];
        order.push(node);
        for(let n of adj[node]){
            if(--indegree[n] === 0){
                q.push(n);
            }
        }

    }
    if(order.length === numCourses)return order;
    return [];
            
    }
}
