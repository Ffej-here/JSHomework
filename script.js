for (i=1; i<=20; i++) {
    console.log(i);
} 

for (i=1; i<=20; i+=2) {
    console.log(i);
}

// x += y is equivalent to x = x + y

let array = [2, 5, 6, 9, 4, 12, 15, 22];
let total = 0;
for (i=0; i<array.length; i++) {
    total = array[i] + total;
}
console.log(total);

let max = [2, 5, 6, 9, 4, 12, 15, 22];
console.log(Math.max(...max));

let max2 = max[0];
for (i = 1; i < max.length; i++) {
    if (max[i] > max2) {
        max2 = max[i];
    }
}
console.log(max2);

let arry = [2, 5, 6, 2, 9, 4, 2, 12, 15, 2, 22];
let counter = 0;
for (i = 0; i <= arry.length; i++) {
    if (arry[i] == 2) {
        counter++;
    }
}
console.log(counter);