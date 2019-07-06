## 문제
~~~
Silicon Valley 30번 문제 - 19.07.06
  
주어진 정수를 2진법으로 나타내었을때 1의 갯수를 리턴하시오.
시간 복잡도: O(log n)

input: 6 // 110
output: 2

input: 13 // 1101
output: 3
~~~

## 코드
~~~
function getOneCountOfBinary(input) {
    let ans = 0, arr = input.toString(2).split('');
    arr.forEach(n => {
        if(n == 1) {
            ans ++;
        }
    });
    return ans;
}
~~~

## 입출력
~~~
6 -> 2
13 -> 3
30 -> 4
55 -> 5
~~~

## 설명
~~~
1. number.toString(n) 함수는 number를 n진법으로 표현한 수를 나타낸다.
2. toString(2) 함수를 이용하여 입력값을 2진수로 바꾸고 배열로 변환한다.
3. 배열의 원소를 순회하며 1의 개수를 샌다.
~~~