// http 모듈을 이용해 웹 서버 구축 가능
import http from 'http'; //웹 관련 모듈 

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>환영합니다. 노드 서버 세상에 오신 것을</h1>');
    res.write('반가워요');
    res.end('<p>Hello~</p>'); // 응답 종료
    //res.write('방가방가'); 위에서 서버가 종료되었으므로 출력문을 쓰면 서버 에러 발생
})
.listen(8080, () => { //웹 브라우저 localhost:8080에서 위의 출력문이 출력됨
    console.log('서버 서비스 중...');
});
