## 문제
~~~
Silicon Valley 24번 문제 - 19.07.01
  
단방향 연결 리스트(Singly linked list)가 주어지면 O(n log n) 시간복잡도로 정렬하시오.
~~~

## 코드
~~~
function Node(data) {
    this.node = data;
    this.next = null;
}

function LinkedList(list) {
    this.head = list || null
}

LinkedList.prototype.push = function(data) {
    if(this.head === null) {
        this.head = new Node(data);
    }
    else {
        let list = this.head;
        while(list.next) {
            list = list.next;
        }
        list.next = new Node(data);
    }
}

LinkedList.prototype.convertNodeToString = function() {
    if(this.head === null) {
        return null;
    }

    let str = '', list = this.head;
    while(list) {
        str += list.node;
        if(list.next) {
            str += ', ';
        }
        list = list.next;
    }
    return str;
}

LinkedList.prototype.mergeSort = function(list) {
    if(list.next === null) {
        return list;
    }

    let count = 0, countList = list;
    let leftPart = list, leftPointer = list;
    let rightPart = null;

    while(countList.next !== null) {
        count ++;
        countList = countList.next;
    }

    let mid = Math.floor(count/2);
    let count2 = 0;

    while(count2 < mid) {
        count2 ++;
        leftPointer = leftPointer.next;
    }
    rightPart = new LinkedList(leftPointer.next);
    leftPointer.next = null;

    return this._mergeSort(this.mergeSort(leftPart), this.mergeSort(rightPart.head));
}

LinkedList.prototype._mergeSort = function(left, right) {
    let result = new LinkedList();
    let resultPointer = result.head;
    let pointerLeft = left;
    let pointerRight = right;

    while(pointerLeft && pointerRight) {
        let tempNode = null;
        if(pointerLeft.node > pointerRight.node) {
            tempNode = pointerRight.node;
            pointerRight = pointerRight.next;
        }
        else {
            tempNode = pointerLeft.node;
            pointerLeft = pointerLeft.next;
        }

        if(result.head == null) {
            result.head = new Node(tempNode);
            resultPointer = result.head;
        }
        else {
            resultPointer.next = new Node(tempNode);
            resultPointer = resultPointer.next;
        }
    }

    resultPointer.next = pointerLeft;
    while(resultPointer.next) {
        resultPointer = resultPointer.next;
    }
    resultPointer.next = pointerRight;
    return result.head;
} 

function sortSingleLinkedList(input) {

    let list = new LinkedList();
    input.forEach(element => {
        list.push(element);
    });
    list.head = LinkedList.prototype.mergeSort(list.head);
    return list.convertNodeToString();
}
~~~

## 입출력
~~~
[40, 20, 60, 10, 50, 30] -> [10, 20, 30, 40, 50, 60]
~~~

## 설명
~~~
Node
    리스트의 노드를 생성한다.

LinkedList
    단방향-연결 리스트를 생성한다.

LinkedList.prototype.push
    노드를 단방향-연결 리스트의 가장 끝에 삽입한다.

LinkedList.prototype.convertNodeToString
    리스트의 출력을 위해 문자열로 변환한다.

LinkedList.prototype.mergeSort
    리스트를 '머지소트' 알고리즘으로 정렬한다.

LinkedList.prototype._mergeSort
    나누어진 두 리스트를 순서에 맞추어 하나의 리스트로 병합한다.
~~~