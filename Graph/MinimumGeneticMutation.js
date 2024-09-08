/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const validGenCharacter = ['A', 'C', 'G', 'T'];
    if(bank.indexOf(endGene) !== -1) {
        const queue = [];
        queue.push([startGene, 0]);
        const visited = new Set();
        visited.add(startGene);
        while(queue.length) {
            let [mutatedGen, count] = queue.shift();
            for(let i=0; i<8; i++) {
                for(let j=0; j<4; j++) {
                    let isMutationPossible = mutatedGen.slice(0, i) + validGenCharacter[j] + mutatedGen.slice(i+1);
                    if(isMutationPossible == endGene) return count+1;
                    if(bank.indexOf(isMutationPossible) != -1 && !visited.has(isMutationPossible)) {
                        queue.push([isMutationPossible, count+1]);
                        visited.add(isMutationPossible);
                    }
                }
            }
        };
    }
    return -1;
};

let bank = ["AATTCCGG","AACCTGGG","AACCCCGG","AACCTACC"];
let startGene = "AACCTTGG";
let endGene = "AATTCCGG";

console.log(minMutation(startGene, endGene, bank));