## 문제
~~~
Silicon Valley 52번 문제 - 19.08.04

이중 연결 리스트 (Doubly linked list)를 구현하시오.

add(value): 주어진 value를 리스트 처음 노드로 등록.
search(value): Value 를 가진 노드를 리턴.
remove(node): 주어진 노드를 연결 리스트에서 제거.
~~~

## 코드
~~~
function Node(data) {
    this.value = data;
    this.next = null;
    this.prev = null;
}

function LinkedList(list) {
    this.head = list || null
}

LinkedList.prototype.add = function(value) {
    if(this.head === null) {
        this.head = new Node(value);
    }
    else {
        let list = this.head;
        while(list.next) {
            list = list.next;
        }
        let node = new Node(value);
        node.prev = list;
        list.next = node;
    }
}

LinkedList.prototype.search = function(value) {
    let node = this.head;
    while(node.next) {
        if(node.value == value) {
            return node;
        }
        node = node.next;
    }
    return null;
}

LinkedList.prototype.remove = function(node) {
    let _node = this.head;
    while(_node.next) {
        if(_node == node) {
            _node.prev.next = _node.next;
            _node.next.prev = _node.prev;
            delete node;
            return true;
        }
        _node = _node.next;
    }
    return false;
}

LinkedList.prototype.toString = function() {
    let str = '';
    let node = this.head;
    while(node) {
        str = str.concat(node.value);
        if(node.next) {
            str = str.concat(' -> ');
        }
        node = node.next;
    }
    return str;
}
~~~

## 설명
~~~
Node
    리스트의 노드를 생성한다.

LinkedList
    양방향-연결 리스트를 생성한다.

LinkedList.prototype.add(value)
    입력된 value값을 가지는 노드를 만들어 양방향-연결 리스트의 가장 끝에 삽입한다.

LinkedList.prototype.search(value)
    입력된 value를 리스트에서 찾아 반환한다. 찾지 못하면 null을 반환한다.

LinkedList.prototype.remove(node)
    입력된 node를 리스트에서 찾아 삭제한다. 삭제에 성공할 시 true를 반환하고 실패 시 false를 반환한다.

LinkedList.prototype.toString()
    리스트를 문자열로 변환하여 반환한다.
~~~