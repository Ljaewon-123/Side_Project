import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import * as passport from 'passport'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req :Request, res:Response , next: () => void){
    passport.authenticate(
      'headerapikey',
      { session: false },  // failureRedirect: '/api/unauthorized' 
      ( value: any ) =>{
        if(value) next()

        // else res.redirect('/static')  
        else throw new UnauthorizedException()  // HttpException  , HttpStatus
      },
    )  (req, res, next)
  }
}
