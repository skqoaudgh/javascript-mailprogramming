## 문제
~~~
Silicon Valley 45번 문제 - 19.07.24

양수 K가 주어지면 K 길이의 이진법 숫자를 모두 프린트하시오. 단, 연속으로 1이 있으면 안됩니다.
~~~

## 코드
~~~
function dfs(array, binary, curLength, maxLength) {
    if(curLength == maxLength) {
        array.answer.push(binary);
        return;
    }
    if(binary.charAt(binary.length-1) == '1') {
        dfs(array, binary+'0', curLength+1, maxLength)
    }
    else {
        dfs(array, binary+'0', curLength+1, maxLength)
        dfs(array, binary+'1', curLength+1, maxLength)
    }
}

function getBinaryStrings(input) {
    let ans = {
        answer: []
    }
    dfs(ans, '', 0, input);
    return ans.answer;
}
~~~

## 입출력
~~~
5 -> 00000 00001 00010 00100 00101 01000 01001 01010 10000 10001 10010 10100 10101
2 -> 00 01 10
~~~

## 설명
~~~
1. 재귀함수(DFS)를 이용하여 문제의 조건에 따라 이진수 문자열에 0 또는 1의 문자를 추가해 나간다.
2. 현재 문자열의 마지막 글자가 1이라면 0만 추가하고, 0또는 1을 추가한다.
3. 정답을 오브젝트를 이용하여 전달한다.
~~~