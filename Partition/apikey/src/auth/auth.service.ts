import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  private apiKey: string[] = [  // 원래는 좀더 안전한 곳에서 가져와야 정석
    'ca03na188ame03u1d78620de67282882a84',
    'd2e621a6646a4211768cd68e26f21228a81',
  ]


  validateApiKey(apiKey : string) {
    return this.apiKey.find(apiK => apiKey === apiK )
  }

}
