// 예외 처리 : node에서 에러 처리는 매우 중요하다
// node는 한 개의 스레드만 사용할 수 있기 때문에 소중히 다뤄야 함.
// try ... catch 구문을 활용
import readline from 'readline';

const inout = readline.createInterface({ 
    //텍스트 입력 스트림을 읽고 쓰기 위한 인터페이스를 제공
    input:process.stdin,
    //Node.js가 제공하는 표준 입력 스트림으로, 
    //키보드 입력 등 사용자로부터의 입력을 받습니다.
    output:process.stdout,
    //Node.js의 표준 출력 스트림으로, 콘솔에 데이터를 출력합니다.
})

const divide = (a, b) => {
    if(b === 0){
        throw new Error('0으로 나눌 수 없어요');
    }
    return a / b;
}

// question(query, callback)
inout.question('첫번째 숫자 입력:', (num1) => {
    inout.question('두번째 숫자 입력:', (num2) => {
        try {
            const a = parseFloat(num1);
            const b = parseFloat(num2);

            if(isNaN(a) || isNaN(b)){
                throw new Error('숫자를 입력하세요');
            }
            const result = divide(a, b); 
            console.log(`${a}를(을) ${b}로 나눈 결과는 ${result}`);
        }catch (error) {
            console.error('오류 발생:', error.message);
        }finally{
            inout.close();
        }
    });
});