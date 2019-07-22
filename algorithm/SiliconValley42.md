## 문제
~~~
Silicon Valley 42번 문제 - 19.07.22

이진트리안에 모든 단말노드(leaf node)의 갯수를 구하시오.
트리의 루트노드가 주어집니다.
~~~

## 코드
~~~
let ans = 0;

function _getLeafNode(node) {
    if(node.left != null) {
        _getLeafNode(node.left);
    }
    if(node.right != null) {
        _getLeafNode(node.right);
    }
    if(node.left == null && node.right == null) {
        ans ++;
    }
}

function getLeafNode(input) {
    _getLeafNode(input);
    return ans;
}
~~~

## 입출력
~~~
    4
   / \
  2   6     (4) -> 4
 / \ / \
1  3 5  7        
~~~

## 설명
~~~
1. 각 노드를 순회하면서 자식의 유무를 확인한다.
2. 자식노드가 없으면 정답 변수의 값을 증가시킨다.
~~~