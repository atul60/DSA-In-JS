/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if(numCourses === 1 || prerequisites.length == 0) return true;
    const graph = {};
    const isCyclic = new Set();;
    
    prerequisites.forEach(([K, V]) => {
        if(!graph[V]) graph[V] = [];
        graph[V].push(K);
    });

    const checkCyclicDependency = (course, completedCourse, result) => {
        if(isCyclic.has(course)) return true;
        if(!graph[course]) return result;
        const completedCourse1 = new Set(completedCourse);
        if(completedCourse1.has(course)) return false;
        completedCourse1.add(course);
        for(const newCourse of graph[course]) {
            result = checkCyclicDependency(newCourse, completedCourse1, result);
            if(!result) break; 
        }
        if(result) {
            isCyclic.add(course); 
        }
        return result;
    }

    const canCompleteAllCourse = () => {
        let result = true;
        for(let course=0; course<numCourses; course++) {
            result = checkCyclicDependency(course, new Set(), true);
            if(!result) break;
        }
        return result;
    }

    return canCompleteAllCourse();

};

console.log(canFinish(2, [[1,0]]));