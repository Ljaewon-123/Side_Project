# Copy Zoom

Copy Zoom using WebRTC and Websockets

굳이 프레임워크를 사용하지 않고 최대한 간결한 구조로 만든다.

Node js 
런타임

Nodemon
자동 서버 재시작 hot reload

bebel
최신 es문법을 구버전 js문법으로 호환시켜주는 트랜스 컴파일러 

express
back

pug
Pug는 템플릿 엔진으로, 웹 애플리케이션에서 동적인 HTML을 생성하기 위해 사용

ws

socket IO
socketio는 websocket을 실행하는게 아니라 프레임워크임 
실시간 , 양방향, event기반 통신 제공 websocket을 사용해서 탄력성이 더 뛰어남 
websocket의 부가기능이 아님 websocket를 사용며 지원하지 않을시 다른 방법을 하용한다 
http long poolling 같은것 연결이 끊겨도 재연결을 시도함 


adapter 분할된 서버간에 연결점 
사용하지 않으면 in memory를 사용하게되고 서버마다 분리되어 
공유할수가없음
