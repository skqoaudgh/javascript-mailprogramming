## 문제
~~~
Silicon Valley 49번 문제 - 19.07.28

연결 리스트로 표현된 두 정수 A 와 B 가 있습니다. A 와 B 를 더한 결과를 연결 리스트로 리턴하시오.

Input: 1->2->3, 1->2->3 // 321 + 321
Output: 2->4->6 // 642

Input: 1->5->6, 0->0->4 // 651 + 400
Output: 1->5->0->1 // 1051
~~~

## 코드
~~~
function addLinkedList(aHead, bHead) {
    let a_ptr = aHead;
    let b_ptr = bHead;
    let ans = new LinkedList();

    while(a_ptr.next != null && b_ptr.next != null) {
        a_ptr = a_ptr.next;
        b_ptr = b_ptr.next;
    }
    while(a_ptr.next != null) {
        let node = new Node(0);
        b_ptr.next = node;
        b_ptr = b_ptr.next;
        a_ptr = a_ptr.next;
    }
    while(b_ptr.next != null) {
        let node = new Node(0);
        a_ptr.next = node;
        a_ptr = a_ptr.next;
        b_ptr = b_ptr.next;
    }

    a_ptr = aHead;
    b_ptr = bHead;
    let carry = 0, sum = 0;
    while(a_ptr.next != null) {
        sum = (a_ptr.value + b_ptr.value + carry) % 10;
        carry = (a_ptr.value + b_ptr.value + carry) / 10;
        ans.push(sum);

        a_ptr = a_ptr.next;
        b_ptr = b_ptr.next;
    }

    if(carry != 0) {
        ans.push(carry);
    }
    return ans;
}
~~~

## 입출력
~~~
[1 -> 2 -> 3, 1 -> 2 -> 3] -> [2 -> 4 -> 6]
[1 -> 5 -> 6, 0 -> 0 -> 4] -> [1 -> 5 -> 0 -> 1]
[3 -> 6 -> 9, 9 -> 9 -> 9 -> 9] -> [2 -> 6 -> 9 -> 0 -> 1]
~~~

## 설명
~~~
1. 두 리스트의 자릿수를 맞춰주기 위해 head부터 끝까지 순회하면서 길이가 맞지 않는 리스트에 값이 0인 노드를 추가해준다.
2. 두 리스트의 현재 자릿수의 값과 carry를 더한다. sum은 현재 자릿수의 값이 되고, carry는 다음 자릿수로 넘어가는 수이다.
3. 리스트의 끝까지 더한 후, 마지막으로 넘어온 carry를 리스트에 추가하여 준다.
~~~