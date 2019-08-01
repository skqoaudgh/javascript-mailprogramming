## 문제
~~~
Silicon Valley 51번 문제 - 19.08.01

L0→L1→…→Ln-1→Ln 의 단일 연결 리스트가 주어지면 순서를 다음과 같이 바꾸시오: L0→Ln→L1→Ln-1→L2→Ln-2→…

input: 1 -> 2 -> 3 -> 4
output: 1 -> 4 -> 2 -> 3
~~~

## 코드
~~~
function getMixedLinkedList(list) {
    let node = list.head;
    while(node.next.next != null) {
        let beforeLastNode = list.head;
        while(beforeLastNode.next.next != null) {
            beforeLastNode = beforeLastNode.next;
        }
        let val = beforeLastNode.next.value;
        beforeLastNode.next = null;

        let newNode = new Node(val);
        newNode.next = node.next;
        node.next = newNode;
        node = node.next.next;
    }
    return ans;
}
~~~

## 입출력
~~~
[1 -> 2] -> [1 -> 2]
[1 -> 2 -> 3] => [1 -> 3 -> 2]
[1 -> 2 -> 3 -> 4] -> [1 -> 4 -> 2 -> 3]
[1 -> 2 -> 3 -> 4 -> 5 -> 6] -> [1 -> 6 -> 2 -> 5 -> 3 -> 4]
~~~

## 설명
~~~
1. 두 개의 노드 포인터를 이용하여 문제를 해결한다.
2. node 포인터는 두 칸씩 이동하여 뒤쪽 노드의 삽입될 위치를 나타낸다.
3. beforeLastNode 포인터는 매 순회마다 리스트의 마지막 노드의 바로 전 노드를 가리키며 마지막 노드의 값을 저장하고 마지막 노드를 자르기 위함이다.
4. 마지막 노드를 자르고 해당 값을 node 포인터를 이용하여 앞 쪽으로 삽입한다.
~~~