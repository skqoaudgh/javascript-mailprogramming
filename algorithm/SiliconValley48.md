## 문제
~~~
Silicon Valley 48번 문제 - 19.07.28

단일 연결 리스트(singly linked list)가 주어지면 리스트의 중간 노드 값을 프린트 하시오. (제일 효율적인 방법으로)
~~~

## 코드
~~~
function printMiddleNode(head) {
    let slow_ptr = head;
    let fast_ptr = head;

    if(head != null) {
        while(fast_ptr != null && slow_ptr->next != null) {
            fast_ptr = fast_ptr.next.next;
            slow_ptr = slow_ptr.next;
        }
        return slow_ptr;
    }
}
~~~

## 입출력
~~~
[1 -> 2 -> 3] -> 2
[1 -> 2 -> 3 -> 4] -> 3
[1 -> 2 -> 3 -> 4 -> 5] -> 3
~~~

## 설명
~~~
1. 2칸씩 이동하는 fast 포인터와 1칸씩 이동하는 slow 포인터 총 2개의 포인터를 이용하여 문제를 해결한다.
2. fast 포인터는 현재 노드가 null인지, slow 포인터는 다음 노드가 null인지 검사하여 그렇지 않다면 다음으로 이동한다.
3. 더 이상 이동할 수 없을 때, slow 포인터가 중앙 노드를 가리키게 된다.
4. slow 포인터는 fast 포인터의 절반씩 움직이기 때문에 항상 중앙을 가리킨다.
~~~