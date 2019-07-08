## 문제
~~~
Silicon Valley 32번 문제 - 19.07.08
  
이진 트리가 주어지면 루트 노드부터 레벨별로 프린트 하시오. 프린트 방식은 홀수 레벨은 왼쪽에서 오른쪽으로, 짝수 레벨은 오른쪽에서 왼쪽으로 프린트 하시오. 루트노드는 레벨 1입니다. 예제를 보시오.

    1
   / \
  2   3
 / \ / \
4  5 6  7

프린트: 1, 3, 2, 4, 5, 6, 7
~~~

## 코드
~~~
class Queue {
    constructor() {
        this._arr = [];
    }
    enqueue(item) {
        this._arr.push(item);
    }
    dequeue() {
        return this._arr.shift();
    }
    empty() {
        return this._arr.length;
    }
}

class Stack {
    constructor() {
        this._arr = [];
    }
    push(item) {
        this._arr.push(item);
    }
    pop() {
        return this._arr.pop();
    }
    empty() {
        return this._arr.length;
    }
}

function levelOrder(RootNode) {
    let ans = [];
    let queue = new Queue(), stack = new Stack();

    ans.push(RootNode.value);
    while(!queue.empty()) {
        let Node = queue.dequeue();

        if(Node.level % 2 == 0) {
            stack.push(Node.value);
        }
        else {
            ans.push(Node.value);
            while(!stack.empty()) {
                ans.push(stack.pop());
            }
        }

        if(Node.left) {
            queue.enqueue(Node.left);
        }
        if(Node.right) {
            queue.enqueue(Node.right);
        }
    }
    return ans;
}
~~~

## 입출력
~~~
    1
   / \
  2   3     -> [1, 3, 2, 4, 5, 6, 7]
 / \ / \
4  5 6  7
~~~

## 설명
~~~
1. 각 노드는 자신의 값, 레벨, 왼쪽자식 노드과 오른쪽자식 노드에 대한 포인터를 가지고 있다고 가정한다.
2. 현재 노드의 레벨이 짝수인 경우에는 오른쪽 자식부터 값을 읽어야 하므로 스택에 삽입한다.
3. 현재 노드의 레벨이 홀수인 경우에는 현재 값을 배열 ans에 그대로 삽입하고, 스택에 값이 있을 경우 스택의 모든 원소를 pop하여 ans에 삽입한다.
4. 스택에 의해 짝수 노드의 값은 오른쪽 자식부터 배열 ans에 삽입된다.
~~~