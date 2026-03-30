class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
  const indegree = new Array(numCourses).fill(0);

  // Build graph: prereq -> course
  for (const [course, prereq] of prerequisites) {
    adj[prereq].push(course);
    indegree[course]++;
  }

  // Kahn's algorithm with simple array queue (using head pointer to avoid O(n) shifts)
  const order = [];
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let qi = 0;
  while (qi < queue.length) {
    const node = queue[qi++];
    order.push(node);
    for (const nei of adj[node]) {
      if (--indegree[nei] === 0) {
        queue.push(nei);
      }
    }
  }

  return order.length === numCourses ? order : [];
    }
}
