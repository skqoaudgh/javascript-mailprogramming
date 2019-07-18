## 문제
~~~
Silicon Valley 37번 문제 - 19.07.18
  
이진탐색트리안에 X보다 크고 Y보다 작은 모든 노드 값을 프린트 하시오.
~~~

## 코드
~~~
let ans = [];
function inorder(node, min, max) {
    if(node.value >= max) {
        return;
    }
    inorder(node.left)
    if(node.value > min) {
        ans.push(node.value);
    }
    inorder(node.right);
}

function getBetweenNumber(input) {
    inorder(BST, input[0], input[1]);
    return ans;
}
~~~

## 입출력
~~~
    4
   / \
  2   8    , [1, 7] -> [2, 3, 4]
 / \ / \
1  3 7  9
~~~

## 설명
~~~
1. 중위순회를 하면 이진탐색트리의 노드들을 정렬된 상태로 출력할 수 있음을 이용한다.
2. 순회를 하면서 현재 노드의 값과 min, max값을 비교하여 결과 배열에 조건에 맞는 값을 추가한다.
~~~