## 문제
~~~
Silicon Valley 33번 문제 - 19.07.09
  
스택(Stack)을 이용해서 큐(Queue)를 구현하시오.
~~~

## 코드
~~~
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
        return this._arr.length>0?false:true;
    }
}

class Queue {
    constructor() {
        this.stack_fst = new Stack();
        this.stack_snd = new Stack();
    }
    push(item) {
        this.stack_fst.push(item);
    }
    pop() {
        while(!this.stack_fst.empty()) {
            this.stack_snd.push(this.stack_fst.pop());
        }
        const result = this.stack_snd.pop();
        while(!this.stack_snd.empty()) {
            this.stack_fst.push(this.stack_snd.pop());
        }  
        return result;     
    }
    empty() {
        return this.stack_fst.empty();
    }
}

function printQueue(input) {
    let queue = new Queue;
    input.forEach(element => {
        queue.push(element);
    });
    
    while(!queue.empty()) {
        console.log(queue.pop());
    }
}
~~~

## 입출력
~~~
[1, 2, 3, 4, 5] -> Print [1, 2, 3, 4, 5]
~~~

## 설명
~~~
1. 스택 2개를 이용하여 큐를 구현하였다.
2. 큐의 첫번째 스택에 원소가 쌓이고, Pop을 할 시에는 두번째 스택으로 원소들을 옮겨 순서를 뒤집은 상태에서 Pop을 한다. 
3. Pop을 한 후에는 다시 첫번째 스택으로 원소들을 옮겨 원래 상태로 되돌려 놓는다. 
~~~