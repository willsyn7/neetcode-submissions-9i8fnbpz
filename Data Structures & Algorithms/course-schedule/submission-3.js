class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const coursemap = new Map();

    for(let i = 0 ; i < numCourses;i++){
        coursemap.set(i,[])

    }
    for(let [course,pre] of prerequisites){
        coursemap.get(course).push(pre)
    }
    console.log(coursemap)
    const set1 = new Set();


        const dfs = (crs) =>{
            if(set1.has(crs))return false; 
            if(coursemap.get(crs).length === 0){
                return true
            }
            set1.add(crs);
            for(let pre of coursemap.get(crs)){
                if(!dfs(pre)){
                    return false
                }
            }
            set1.delete(crs);
            coursemap.set(crs,[]);
            return true;
        }

    for(let n = 0 ; n < numCourses ; n++){
        if(!dfs(n)){
            return false ;
        }
    }

    return true 
    }
}
