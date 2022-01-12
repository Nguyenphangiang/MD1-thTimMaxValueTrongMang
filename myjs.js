let numbers = [10,3,2,99,-1];
let max = numbers[0];
let index = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]>max){
        max = numbers[i];
        index = i;
    }
}alert("max = " + max + " tại vị trí " + index);