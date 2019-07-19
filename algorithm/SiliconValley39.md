## 문제
~~~
Silicon Valley 39번 문제 - 19.07.19
  
단방향 연결 리스트(singly linked list)가 주어지면 총 합이 0으로 되는 연결된 노드들을 뺀 뒤 남은 노드의 값을 프린트 하시오.

input: 3 -> (-5) -> 5 -> 1 -> 2 -> 3
output: 3 -> 1 -> 2 -> 3

input: 1 -> 2 -> 3 -> 4 -> (-10) -> 5
output: 5

input: 10 -> (-3) -> (-4) -> (-3) -> 1
output: 1
~~~

## 코드
~~~
function removeZeroPart(input) {
    let list = new LinkedList();
    for(let i=0; i<input.length; i++) {
        list.push(input[i]);
    }

    let sum = 0, rightIdx = 0, leftIdx = 0;
    let left, right;
    left = right = list.head;
    while(true) {
        if(sum >= M) {
            sum -= left.value;
            left = left.next;
            leftIdx ++;
        }
        else if(hi == N) {
            break;
        }
        else {
            sum += right.value;
            right = right.next;
            rightIdx ++;
        }
        if(sum == 0) {
            list.delete(leftIdx, rightIdx);
        }
    }
    return list.toString();
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
1. 노드와 연결리스트 클래스는 이미 구현되어 있음을 가정한다.
2. 두 개의 포인터를 이용하는 '투포인터' 알고리즘을 사용한다.
    (1) left와 right 포인터를 head로 초기화한다.
    (1) left와 right 포인터까지의 합을 구한다.
    (2) right가 리스트의 끝이거나 현재 합이 0 이상이면 left를 다음 노드로 이동한다.
    (3) (2)의 조건에 맞지 않으면 right를 다음 노드로 이동한다.
    (4) 현재의 합이 0이라면 left부터 right까지의 노드를 리스트에서 삭제한다.
3. 연산 결과를 반환한다.
~~~