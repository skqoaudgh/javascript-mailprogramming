## 문제
~~~
Silicon Valley 23번 문제 - 19.06.30
  
정수 배열과 정수 k가 주어지면 모든 원소를 k칸씩 앞으로 옮기시오.

input: [1, 2, 3, 4, 5], k = 2
output: [3, 4, 5, 1, 2]

input: [0, 1, 2, 3, 4], k = 1
output: [1, 2, 3, 4, 0]

시간복잡도와 공간복잡도를 최대한 최적화 하시오.
~~~

## 코드
~~~
function rotateArray_N2(input) {
    for(let i=0; i<input[1]; i++) {
        let pri = input[0][0];
        for(let j=0; j<input[0].length-1; j++) {
            input[0][j] = input[0][j+1];
        }
        input[0][input[0].length-1] = pri;
    }
    return input[0];
}

function rotateArray_N(input) {
    input[1] = input[1] % input[0].length;
    for(let i=0; i<input[1]/2; i++) {
        [input[0][i], input[0][input[1]-i-1]] = [input[0][input[1]-i-1], input[0][i]];
    }
    for(let i=0; i<(input[0].length-input[1])/2; i++) {
        [input[0][i+input[1]], input[0][input[0].length-input[1]-i-1+input[1]]] = 
        [input[0][input[0].length-input[1]-i-1+input[1]], input[0][i+input[1]]];
    }
    for(let i=0; i<input[0].length/2; i++) {
        [input[0][i], input[0][input[0].length-i-1]] = [input[0][input[0].length-i-1], input[0][i]];
    } 
    return input[0];
}
~~~

## 입출력
~~~
[[1, 2, 3, 4, 5], 2] -> [3, 4, 5, 1, 2]
[[0, 1, 2, 3, 4], 1] -> [1, 2, 3, 4, 0]
[[1, 2, 3, 4, 5, 6, 7], 13] -> [7, 1, 2, 3, 4, 5, 6]
~~~

## 설명
~~~
rotateArray_N2
    1. 배열의 첫번째 원소를 임시 변수에 저장한다.
    2. 두번째 변수부터 각 원소를 앞으로 한 칸 옮기고, 임시변수를 이용하여 첫번째 원소를 맨 뒤로 옮긴다.
    3. 이 알고리즘을 K번 반복하면 원소를 K칸 앞으로 옮길 수 있다.

rotateArray_N
    1. 배열의 0~K-1번째 원소까지 뒤집는다.
    2. 배열의 K~N-1번째 원소까지 뒤집는다.
    3. 배열의 0~N-1번째 원소까지 뒤집는다.
    4. 세 번의 reverse를 통해 원소를 K칸 앞으로 옮길 수 있다.
~~~