## 문제
~~~
Silicon Valley 29번 문제 - 19.07.05
  
반복된 알파벳으로 이루어진 문자배열이 주어지면 연속으로 중복된 알파벳이 없도록 문자배열을 재배열하여 리턴하시오. 불가능 하다면 empty string을 리턴하시오.

input: "aaabbc"
output: "ababac"

input: "aaac"
output: ""
~~~

## 코드
~~~
function reArrangeString(input) {
    input = input.split('');
    let length = input.length;
    let flag = false
    for(let i=0; i<length; i++) {
        if(input[i] == input[i-1]) {
            let idx;
            flag = false;
            for(let j=i+1; j<length; j++) {
                if(input[i] != input[j]) {
                    idx = j;
                    flag = true;
                    break;
                }
            }
            if(flag) {
                [input[i], input[idx]] = [input[idx], input[i]];
            }
        }
    }
    if(flag)
        return input.join('');
    else
        return 'empty string';
}
~~~

## 입출력
~~~
"aaabbc" -> "ababac"
"aaac" -> "empty string"
"aaabbbccd" -> "abababcdc"
"abbbbc" -> "empty string"
~~~

## 설명
~~~
1. 문자열을 왜 순회하며 같은 문자가 나오면 다른 문자와 Swap을 한다.
2. 변수 flag를 이용하여 다른 문자가 없는 것을 확인한다.
3. flag가 false라면 empty string을 반환하며 true라면 swap 결과를 반환한다.
~~~