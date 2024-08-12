// BMI 동기 방식으로 처리
// readline-sync 모듈을 설치 후 사용 (터미널에 npm install readline-sync) 입력

import {createRequire} from 'module';
//createRequire는 ESM 환경에서 CommonJS 모듈을 
//로드할 수 있는 require 함수를 생성하는 데 사용됩니다.
const require = createRequire(import.meta.url);
//import.meta.url은 현재 모듈의 URL을 나타내며, 이를 통해 생성된 
//require 함수는 현재 ESM 파일과 같은 컨텍스트에서 CommonJS 모듈을 로드 가능
const readlineSync = require('readline-sync');
//readline-sync는 사용자로부터 동기적으로 입력을 받을 수 있는 라이브러리

// 터미널 인코딩 작업(window 용)
if(process.platform === 'win32'){
    require('child_process').execSync('chcp 65001'); // 터미널의 코드 페이지를 UTF-8로 설정

}
console.log('BMI 계산기 시작')

//BMI 판정 기준 함수 작성
const getBmiCategory = (bmi) => {
    if(bmi < 18.5) return '저체중';
    if(bmi >= 18.5 && bmi < 23) return '정상';
    if(bmi >= 23 && bmi < 25) return '비만 전 단계';
    if(bmi >= 25 && bmi < 30) return '1단계 비만';
    if(bmi >= 30 && bmi < 35) return '2단계 비만';
    return '3단계 비만';

}

console.log('키 입력 받기');
const height = readlineSync.question('키 (cm 단위)');
console.log('입력 받은 키 : ${height}');

console.log('몸무게 입력 받기');
const weight = readlineSync.question('몸무게 (kg 단위)');
console.log('입력 받은 몸무게 : ${weight}');

const heightMeters = parseFloat(height) / 100;  //cm -> m로 변환
const weightKg = parseFloat(weight); 

  console.log('BMI 계산');
  const bmi = weightKg / ((heightMeters * heightMeters));
  const category = getBmiCategory(bmi);
  console.log(`당신의 BMI 지수는 ${bmi.toFixed(2)}이고 체질량 지수는 ${category}`);
  console.log('\n동기 처리 완료');