## 문제
~~~
Silicon Valley 36번 문제 - 19.07.18
  
주어진 정수가 4의 거듭제곱인지 확인하시오.
~~~

## 코드
~~~
function isPowerOfFour(input) {
    if(input < 4) {
        return false;
    }
    while(input > 1) {
        if(input % 4 != 0) {
            return false;
        }
        input /= 4;
    }
    return true;
}
~~~

## 입출력
~~~
0 -> false
1 -> false
4 -> true
16 -> true
20 -> false
64 -> true
~~~

## 설명
~~~
1. 주어진 수가 1이 될 때 까지 계속 4로 나눈다. 이 때, 4로 나누어 떨어지지 않으면 4의 거듭제곱이 아니다.
2. 주어진 수가 4보다 작을 경우 무조건 false를 반환한다.
3. 주어진 수가 1이 될 때 까지 4로 나누어 떨어졌다면 true를 반환한다.
~~~