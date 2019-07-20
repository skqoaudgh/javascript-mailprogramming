## 문제
~~~
Silicon Valley 40번 문제 - 19.07.20

"Look and say" sequence (보고 말하는 수열)은 다음과 같습니다.

1 - 1개의 1
11 - 2개의 1
21 - 1개의 2, 1개의 1
1211 - 1개의 1, 1개의 2, 2개의 1
111221 - ...

위와 같이 수열의 N 번째 수는 N-1번째 수의 조합을 풀어놓은 수 입니다.
정수 N이 주어졌을때, "Look and say" 수열의 N번째 수까지 프린트 하시오.
~~~

## 코드
~~~
function makeLookAndSaySequence(input) {
    let str = '';
    input = (''+input).split('');
    let base = input[0], count = 1;
    for(let i=1; i<input.length; i++) {
        let temp = input[i];
        if(base == temp) {
            count ++;
        }
        else {
            str += (count + '개의 ' + base + ', ');
            base = temp;
            count = 1;
        }
    }
    str += makeElement(base, count);
    return str;
}
~~~

## 입출력
~~~
1 -> 1개의 1
11 ->  2개의 1
21 -> 1개의 2, 1개의 1
1211 -> 1개의 1, 1개의 2, 2개의 1
111221 -> 3개의 1, 2개의 2, 1개의 1
~~~

## 설명
~~~
1. 주어진 정수를 각 자리수를 원소로 가지는 배열로 변환한다.
2. 첫번째 원소를 변수 base의 초기값으로 설정하고 변수 count 값은 1로 초기값으로 설정한다.
3. 배열을 순회하면서 base와 현재 원소가 같다면 count의 값을 증가시키고 다르다면 현재까지 저장된 base와 count를 가지고 정답 문자열에 추가한다.
~~~