## 문제
~~~
Silicon Valley 44번 문제 - 19.07.24

정수 배열과 정수 K가 주어지면 원소 3개의 합으로 K가 만들어지는지 체크하시오.
~~~

## 코드
~~~
function combination(combArray, n, r, index, target, array, k, ans) {
    if(r == 0) {
        let sum = 0;
        for(let i=0; i<3; i++) {
            sum += array[combArray[i]];
        }
        if(sum == k) {
            ans.answer = true;
        }
    }
    else if(target == n) {
        return;
    }
    else {
        combination(combArray, n, r, index, target+1, array, k, ans); // (a)
        combArray[index] = target;
        combination(combArray, n, r-1, index+1, target+1, array, k, ans); // (b)

    }
}

function isPossibleThreeSum(input) {
    let ans = {
        answer: false
    }
    combination([], input[0].length, 3, 0, 0, input[0], input[1], ans);
    return ans.answer;
}
~~~

## 입출력
~~~
[[-1, 3, -2, 5], 2] -> true
[[1, 2, 3, 4], 3] -> false 
~~~

## 설명
~~~
1. 재귀함수(DFS)를 이용하여 배열에 대한 nCr 조합을 구한다.
2. (a)는 다음 인덱스에 위치한 원소를 조합배열에 넣지 않는 경우이고, (b)는 다음 인덱스 위치한 원소를 조합배열에 넣는 경우이다.
3. 조합을 구한 후, 원소들의 합을 구하여 K와 비교한다. 정답을 오브젝트를 통하여 전달하여 사용할 수 있도록 한다.
~~~