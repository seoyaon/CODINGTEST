// 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

function solution(slice, n) {
    const maxSlice = 10; // 한 판의 피자가 최대로 가질 수 있는 조각 수
    const slices = Math.min(slice, maxSlice); // 입력값 slice와 maxSlice 중 작은 값 선택
  return Math.ceil(n / slices); // 필요한 피자판 수 구하기
}