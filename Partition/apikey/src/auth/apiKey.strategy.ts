import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {

constructor(private authService: AuthService) {
  super({ header: 'apiKey', prefix: '' }, true, (apikey: string, done: any, req: Request) => {

  const checkKey = authService.validateApiKey(apikey);
  if (!checkKey) {
  return done(false);
  }
  
  return done(true);
  });
}

}