/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    if(!root) return 0;
    let longPath = 0;

    function dfs(node) {
        if(!node) return 0;
        
        
        const leftPath = dfs(node.left);
        const rightPath = dfs(node.right);

        let leftContribution = 0;
        let rightContribution = 0;
        if(node.val == node.left?.val) {
            leftContribution =  leftPath + 1;
        }
        if(node.val == node.right?.val) {
            rightContribution = rightPath + 1;
        } 

        longPath = Math.max(longPath, leftContribution + rightContribution);
    
        return Math.max(leftContribution, rightContribution);
    }

    dfs(root);

    return longPath;
};
