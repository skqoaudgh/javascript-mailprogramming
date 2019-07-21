## 문제
~~~
Silicon Valley 41번 문제 - 19.07.21

정렬된 정수 배열이 주어지면, 발란스된 이진탐색트리로 바꾸시오.
~~~

## 코드
~~~
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function _getBalancedBST(array) {
    if(array.length > 0) {
        const idx = Math.floor(array.length/2);
        let node = new Node(array[idx]);
        node.left = _getBalancedBST(array.slice(0, idx));
        node.right = _getBalancedBST(array.slice(idx+1));
        return node;
    }
}


function getBalancedBST(input) {
    let head = _getBalancedBST(input);
    return head;
}
~~~

## 입출력
~~~
                           4
                          / \
[1, 2, 3, 4, 5, 6, 7] -> 2   6
                        / \ / \
                       1  3 5  7        
~~~

## 설명
~~~
1. 배열의 중앙에 위치한 원소를 root로 하여 트리를 만든다.
2. 재귀적으로 아래의 연산을 반복한다.
    (1) 현재 root의 왼쪽 부분배열의 중앙에 위치한 원소를 left 자식노드로 삽입한다.
    (2) 현재 root의 오른쪽 부분배열의 중앙에 위치한 원소를 right 자식노드로 삽입한다.
~~~