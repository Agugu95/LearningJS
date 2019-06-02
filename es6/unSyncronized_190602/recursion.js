function findNeedle(stack) {
    if (stack.length === 0) return 'no more stack here';
    if (stack.shift() === 'needle') return 'found it';
    return findNeedle(stack);
}

const stack = [1, 2, 3, 4, 5, 'needle', 7, 8, 9];
console.error(findNeedle(stack));