## 문제
~~~
Silicon Valley 28번 문제 - 19.07.04
  
정렬된 양수(positive integer) 배열이 주어지면, 배열 원소들의 합으로 만들수 없는 가장 작은 양수를 구하시오.
단, 시간복잡도는 O(n) 이여야 합니다.

input: [1, 2, 3, 8]
output: 7

// 1 = 1
// 2 = 2
// 3 = 3
// 4 = 1 + 3
// 5 = 2 + 3
// 6 = 1 + 2 + 3
// 7 = 불가능
~~~

## 코드
~~~
function getNonMakeableInteger(input) {
    let ans, sum;
    sum = ans = 0;

    for(let i=0; i<input.length; i++) {
        if(input[i] != ans+1) {
            if(input[i] == sum+1) {
                sum ++;
            }
            else {
                continue;
            }
        }
        else {
            ans ++;
            sum += ans;
        }
    }
    return sum+1;
}
~~~

## 입출력
~~~
[1, 2, 3, 8] -> 7
[3, 4, 5, 6, 10] -> 1
[1, 2, 3, 4, 5, 16] -> 17
[1, 2, 3, 4, 5, 6, 7] -> 29
~~~

## 설명
~~~
1. 변수 ans는 원소 중 이어지는 정수 값 중 최대값을 나타낸다.
2. 변수 sum은 이어지는 정수 값들의 합을 나타낸다.
3. 배열 원소들의 합으로 만들 수 없는 가장 작은 양수는 sum+1이다.
4. 단, sum+1 값이 원소에 나타날 경우가 있으므로 배열 끝까지 순회하여 검사를 한다. 나타날 경우 +1을 해준다.
~~~