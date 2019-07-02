## 문제
~~~
Silicon Valley 26번 문제 - 19.07.02
  
정수 배열이 주어지면 , 배열 안의 모든 정수의 최대 공약수(GCD)를 구하시오.
시간 복잡도 제한 O(n)

input: [3, 2, 1]
output: 1

input: [2, 4, 6, 8]
output: 2
~~~

## 코드
~~~
function gcd(a, b) {
    return a%b?gcd(b,a%b):b;
}

function getGCDofArray(input) {
    let arr = input[0];
    for(let i=1; i<input.length; i++) {
        arr = gcd(arr, input[i]);
    }
    return arr;
}
~~~

## 입출력
~~~
[3, 2, 1] -> 1
[2, 4, 6, 8] -> 2
[12, 18, 36, 66] -> 6
~~~

## 설명
~~~
1. 최대공약수는 '유클리드 호제법'을 이용하여 구하며, N개의 정수의 최대공약수를 구하는 것의 시간복잡도는 O(Nlogb) = O(N) 이다.
2. gcd(a, b, c) = gcd(gcd(a,b), c) 식을 이용하여 여러 수(배열)의 최대공약수를 구한다.
~~~