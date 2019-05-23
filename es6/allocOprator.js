let a1; let
    a2;
a1 = a2 = 9.8;

const nums = [3, 5, 15, 7, 5];
let n;
let i = 0;
// eslint-disable-next-line no-cond-assign 
while ((n = nums[i]) < 10 && (i += 1) < nums.length) {
    // eslint-disable-next-line no-console
    console.log(`Number less than 10: ${n}`);
}
console.log(`Number greater than 10 found${n}`);
console.log(`${nums.length - i - 1} numbers remain`);

