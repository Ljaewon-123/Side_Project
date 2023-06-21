import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  testGet(@Req() request: string){
    // console.log(join( __dirname, '..', 'static' ))

    console.log(request)

    console.log('hello apiKey')
    return 'hello test client'
  }

  @Post()
  testPost(@Req() request: string, @Body() body : any ){

    console.log(body)

    return 'hello api post client'
  }


}
