const input = document.getElementById('input');
const output = document.getElementById('output');

function myFunction(input) {
    let ans;
    return ans;
}

let input_array = [
    [-1, 3, -1, 5],
    [-5, -3, -1],
    [2, 4, -2, -3, 8]
];
let input_string = input_array.join(" || ");

let output_array = [], output_string = '';
for(let i=0; i<input_array.length; i++) {
    output_array.push(myFunction(input_array[i]));
}
output_string = output_array.join(" || ");

input.value = input_string;
output.value = output_string;