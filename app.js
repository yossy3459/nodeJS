// nnn 3-1
'use strict'

const number = process.argv[2] || 0;
let sum = 0;

for (let i=0; i<number; i++){
    sum = sum + (i + 1);
}

console.log(sum);