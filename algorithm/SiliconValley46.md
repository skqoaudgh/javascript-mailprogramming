## 문제
~~~
Silicon Valley 46번 문제 - 19.07.25

문자배열이 주어지면, 주어진 문자로 만들수 있는 모든 문자배열 조합을 프린트 하시오.

input: ABC
output: ABC ACB BAC BCA CBA CAB
~~~

## 코드
~~~
function permutation(ans, array, depth, n) {
    if(depth == n) {
        array = array.join('');
        ans.answer.push(array);
    }
    for(let i=depth; i<n; i++) {
        [array[i], array[depth]] = [array[depth], array[i]];
        permutation(ans, array, depth+1, n);
        [array[i], array[depth]] = [array[depth], array[i]];
    }

}

function getAllStrings(input) {
    let ans = {
        answer: []
    }
    permutation(ans, input.split(''), 0, input.length);
    return ans.answer;
}
~~~

## 입출력
~~~
ABC -> ABC, ACB, BAC, BCA, CBA, CAB
AB -> AB, BA
~~~

## 설명
~~~
1. 한 문자열에 대한 모든 순열을 구하는 문제로 해석할 수 있다.
2. 현재 인덱스부터 마지막 인덱스까지 교환을 하거나 안하고를 반복하여 재귀를 통해 순열을 구한다.
3. 원소의 교환을 위해 입력 문자열을 배열로 변환하고, 정답 배열에 추가하기 전에 다시 문자열로 변환한다.
~~~