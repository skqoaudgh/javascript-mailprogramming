## 문제
~~~
Silicon Valley 27번 문제 - 19.07.03
  
"./"과 "../" 이 포함된 파일 경로를 "./"과 "../"이 없는 유닉스 파일 경로로 바꾸시오.
"./"는 현재의 위치를 뜻하고, "../"는 상위 디렉토리를 뜻합니다.

input: "/usr/bin/../"
output: "/usr/"

input: "/usr/./bin/./test/../"
output: "/usr/bin/"
~~~

## 코드
~~~
function getUNIXDirectory(input) {
    let arr = input.split('/');
    let ans = [];
    let str = '/';
    arr.forEach(element => {
        if(element == '' || element == '.') {
            return;
        }
        else if(element == '..') {
            ans.pop();
        }
        else {
            ans.push(element);
        }
    });
    
    ans.forEach(element => {
        str += element;
        str += '/'
    });
    return str;
}
~~~

## 입출력
~~~
"/usr/bin/../" -> /usr/
"/usr/./bin/./test/../" -> /usr/bin/
"./usr/bin/../../../bin" -> /bin/
~~~

## 설명
~~~
1. 입력받은 경로를 '/'를 기준으로 나누어 배열에 저장한다.
2. 문자로 이루어진 경로가 들어오면 배열에 삽입한다.
3. 문자 경로가 아닌 '.', '' 는 넘어가고, '..'의 경우 가장 마지막 원소를 삭제한다.
4. 최종 경로에 '/'를 각 사이마다 삽입한다.
~~~