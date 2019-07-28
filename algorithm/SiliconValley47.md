## 문제
~~~
Silicon Valley 47번 문제 - 19.07.26

0, 1, 2로 이루어진 배열을 가장 효율적으로 정렬 하시오. 시간복잡도 O(n).

Input: [0, 1, 2, 2, 0, 0, 0, 1]
Output: [0, 0, 0, 0, 1, 1, 2, 2]
~~~

## 코드
~~~
function sortThreeNumber(input) {
    let array = [0, 0, 0], ans = [];
    for(let i=0; i<input.length; i++) {
        array[input[i]] ++;
    }
    
    for(let i=0; i<3; i++)
        for(let j=0; j<array[i]; j++)
            ans.push(i);

    return ans;
}
~~~

## 입출력
~~~
[0, 1, 2, 2, 0, 0, 0, 1] -> [0, 0, 0, 0, 1, 1, 2, 2]
[1, 2, 0, 0, 2, 1, 1, 0] -> [0, 0, 0, 1, 1, 1, 2, 2]
~~~

## 설명
~~~
1. Counting Sort를 이용하여 문제를 해결하였다.
2. 0, 1, 2의 개수를 각각 새어 배열에 저장한다.
3. 각 숫자의 개수만큼 정답 배열에 숫자를 삽입한다.
~~~