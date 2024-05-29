let arr: number[] = [23, 23, 43, 45, 56, 56];

function displayEven(arr: number[]): number[] {
    let a: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            a.push(arr[i]);
        }
    }
    return a;
}

console.log(displayEven(arr));
