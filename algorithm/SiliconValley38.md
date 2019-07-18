## 문제
~~~
Silicon Valley 38번 문제 - 19.07.18
  
1~N 까지 있는 정수 배열에 원소 하나가 없어졌습니다. 없어진 원소의 값을 구하시오.
~~~

## 코드
~~~
function getRemovedNumber(input) {
    let correctSum = (input.length+1)*(input.length+2)/2;
    let arraySum = 0;
    for(let i=0; i<input.length; i++) {
        arraySum += input[i];
    }
    return correctSum-arraySum;
}
~~~

## 입출력
~~~
[6, 3, 2, 4, 5] -> 1
[7, 2, 1, 4, 5, 6] -> 3
[1, 2, 3, 4, 5, 9, 7, 8] -> 6
~~~

## 설명
~~~
1. 1~N까지의 정수 합과 주어진 입력배열의 정수 합을 구한다.
2. 두 합의 차이가 배열에서 사라진 원소임을 알 수 있다.
~~~