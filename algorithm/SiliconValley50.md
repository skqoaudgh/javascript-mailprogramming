## 문제
~~~
Silicon Valley 50번 문제 - 19.07.30

랜덤한 정수 배열이 주어지면 중복된 원소의 값을 모두 프린트 하시오. 단, 공간복잡도 O(1)이여야 합니다.

input: [0, 6, 3, 4, 0]
output: 0

input: [5, 4, 3, 2, 1, 1, 1, 1, 1, 2]
output: 1, 2
~~~

## 코드
~~~
function getDuplicatedElement(input) {
    let ans = [];
    input.sort();
    for(let i=0; i<input.length-1; i++) {
        if(input[i] == input[i+1]) {
            ans.push(input[i]);
            while(input[i] == input[i+1]) {
                i++;
            }
        }
    }
    return ans;
}
~~~

## 입출력
~~~
[0, 6, 3, 4, 0] -> 0
[5, 4, 3, 2, 1, 1, 1, 1, 1, 2] -> 1, 2
[3, 7, 1, 2, 5, 1, 8, 3, 9, 7] -> 1, 3, 7
~~~

## 설명
~~~
1. 배열을 정렬한다. (이 떄, 공간복잡도에 제약을 받지 않는 정렬 알고리즘을 사용한다. e.g. 퀵정렬)
2. i번째 원소와 i+1번째 원소를 비교하여 중복을 확인한다.
3. 중복일 때에는 정답 배열에 값을 추가하고 중복인 값이 나오지 않을 때 까지 i를 증가시킨다.
~~~