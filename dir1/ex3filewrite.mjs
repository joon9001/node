import {promises as fs} from 'fs';
//fs 모듈은 기본적으로 콜백 형식으로 사용. 그래서 promise형식으로 바꿔주는 방식을 사용함

const ss = '파일로 저장된 문서. 장소 3강';

fs.writeFile('./ex3write.txt', ss)
.then (() => {
    return fs.readFile('./ex3write.txt');
})
.then((data) => {
    console.log(data.toString());
})
 // data.toString()은 버퍼 데이터를 문자열로 변환하는 메소드이다. 
//이는 파일의 원시 바이너리 데이터를 인간이 읽을 수 있는 텍스트 형태로 변환한다.
.catch((err) => {
    console.log('err', err);
})