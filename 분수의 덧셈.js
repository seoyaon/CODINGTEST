// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
    const den = denom1 * denom2 // 공통 분모 구하기
    const mol = (numer1 * denom2) + (numer2 * denom1) // 분자끼리 더하기
    const gcdVal = gcd(mol,den); // 최대공약수
    const answerMol = mol / gcdVal // 분자
	const answerDen = den / gcdVal // 분모

    return [answerMol,answerDen];
}

// 최대공약수 함수
function gcd(a, b){
    if(b === 0){
        return a;
    }
    return gcd(b, a % b);
};