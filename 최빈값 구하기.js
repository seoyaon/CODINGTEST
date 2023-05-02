// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
    var array = [1];
    var numMap = new Map(); // 새로운 Map 객체 생성
    // 배열 array의 모든 요소를 반복하여 맵 객체에 추가하고, 각 요소의 빈도수를 계산
    array.forEach(function(num){
       // numMap 객체에서 현재 요소의 키가 존재하는지 확인하고, 빈도수 증가시키기
        if(numMap.has(num)){
            numMap.set(num, numMap.get(num) + 1)
        // 존재하지 않으면 새로운 키 추가
        } else {
            numMap.set(num, 1);
        }
    });
    
    var answer // 최빈값을 저장할 변수
    
    var maxCount = 1; // 가장 큰 빈도수를 저장할 변수
    
    numMap.forEach(function(cur, idx){
        if(numMap.size === 1){ // 하나의 요소만 있을 경우
            answer = idx;
            return;
        }
        // 최빈값 찾기
        if(cur > maxCount){
            answer = idx;
            maxCount = cur;
        }else if(cur === maxCount){
            // 여러개일 경우 -1을 반환  
            answer = -1;
        }
    });

    console.log(answer)
    return answer;
}