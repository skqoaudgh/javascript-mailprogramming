## 문제
~~~
Silicon Valley 31번 문제 - 19.07.07
  
백만개의 정수가 들어있는 배열을 가장 빨리 정렬하시오. 모든 정수는 1조보다 작습니다.

힌트) 퀵소트 아님.
~~~

## 코드
~~~
function mergeSort(input, left, right) {
    let temp = [];
    if(left < right) {
        let mid = parseInt((left+right)/2);
        mergeSort(input, left, mid);
        mergeSort(input, mid+1, right);

        let i = left;
        let j = mid+1;
        let k =left;
        while(i <= mid || j <= right) {
            if(i <= mid && (j > right || input[i] <= input[j])) {
                temp[k++] = input[i++];
            }
            else {
                temp[k++] = input[j++];
            }
        }
		for(let i=left; i<=right; i++) {
            input[i] = temp[i];
        }
    }
    return input;
}
~~~

## 입출력
~~~
[-10, 3, 5, 7, 8, 1, 4, -2, 5, 10,-9, 21] -> [-10, -9, -2, 1, 3, 4, 5, 5, 7, 8, 10, 21]
~~~

## 설명
~~~
1. O(NlogN)의 시간복잡도를 가지는 MergeSort로 코드를 작성하였다.
2. 배열변수 temp에 원소들을 정렬된 상태로 병합시킨다.
3. 최종적으로 완성된 temp를 다시 input에 복사하여 다음 정렬에 사용할 수 있도록 한다.
~~~