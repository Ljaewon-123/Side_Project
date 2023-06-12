import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WsResponse, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Logger } from '@nestjs/common'
import { Socket, Server } from 'socket.io'

const BASIC_PORT = 3000  // 아무 port옵션이 없으면 기존 사용중인 html 포트를 따라간다.

// namespace옵션이 없어도 기본적으로 namespace를 사용하고있다. root namespace
@WebSocketGateway(BASIC_PORT, { namespace: '/' }) 
export class MessageGateway
implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server  // 모든사람 응답 

  private logger: Logger = new Logger(MessageGateway.name)


  afterInit(server: Server) { // 게이트웨이가 초기화 되자마자 실행 
    this.logger.log('Initialized')
  }

  handleDisconnect(client: Socket) { // 게이트웨이 연결해제를 수행
    this.logger.log(`Client disconnected: ${client.id}`)
  }
  
  handleConnection(client: Socket, ...args: any[]) { // 클라이언트가 서버에 연결할때마다 실행 
    this.logger.log(`Client connected: ${client.id}`)
  }

  // 연결이 끊어진후 재연결되면 다른 소켓id를 가지게 됨 재생을 시작하면 로그를 볼수있다.


  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text: string) {

    console.log('??')

    this.wss.emit('msgToClient', text)
    
    // client.emit('msgToClient', text) // 이런것도 가능
    // return { event: 'msgToClinet', data: text } // 이벤트를 보낸 client에게만 반환
  }
}
