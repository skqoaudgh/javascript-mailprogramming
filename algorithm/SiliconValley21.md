## 문제
~~~
Silicon Valley 21번 문제 - 19.06.28
  
O(n log n)시간 복잡도를 가진 정수 배열 정렬 알고리즘을 구현하시오.

예제)
Input: [3, 1, 5, 6]
Output: [1, 3, 5, 6]
~~~

## 코드
~~~
function sort(input) {
    let arr = {input};
    quickSort(arr.input, 0, input.length-1);
    return arr.input;
}

function quickSort(arr, left, right) {
    let pivot = left;
    let j = left;
    let i = left+1;
    if(left < right) {
        for(; i<=right; i++) {
            if(arr[pivot] > arr[i]) {
                j ++;
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }
        [arr[pivot], arr[j]] = [arr[j], arr[pivot]];
        pivot = j;

        quickSort(arr, left, pivot-1);
        quickSort(arr, pivot+1, right);
    }
}
~~~

## 입출력
~~~
[3, 1, 5, 6] -> [1, 3, 5, 6]
~~~

## 설명
~~~
1. 위 알고리즘은 O(n log n)시간 복잡도인 '퀵소트'를 구현한 것이다.
2. 변수 pivot은 비교인덱스, j는 교환인덱스, i는 대상인덱스(pivot과 비교 할)이다.
3. i와 pivot을 비교하여 pivot이 더 크다면 j의 값을 +1 하고 j와 i를 Swap한다.
4. 반복문이 종료된 후에는 pivot과 j를 Swap한다.
5. 한 번의 함수의 실행이 종료된 후에는 pivot 왼쪽의 수는 모두 pivot보다 작은 수이고, 오른 쪽의 수는 모두 pivot보다 큰 수이다.
6. 재귀호출로 pivot과 왼쪽과 오른쪽을 정렬한다.
~~~