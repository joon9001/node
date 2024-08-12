// fs 모듈은 비동기 처리가 기본.
// 이 때 결과를 순서대로 출력되도록 하려면 promise 객체를 사용한다.
import {promises as fs} from "fs";

console.log("시작");

fs.readFile ('./ex3write.txt')
.then((data) => {
    console.log("1번", data.toString()); 
    // data.toString()은 버퍼 데이터를 문자열로 변환하는 메소드이다. 
    //이는 파일의 원시 바이너리 데이터를 인간이 읽을 수 있는 텍스트 형태로 변환한다.
    return fs.readFile ('./ex3write.txt');
})
.then((data) => {
    console.log("2번", data.toString());
    return fs.readFile ('./ex3write.txt');
})
.then((data) => {
    console.log("3번", data.toString());
    return fs.readFile ('./ex3write.txt');
})
.catch((err) => {
    console.log("에러", err);
})

console.log("끝");