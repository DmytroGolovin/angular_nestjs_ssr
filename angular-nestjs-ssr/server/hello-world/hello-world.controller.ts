import { Controller, Get } from '@nestjs/common';

@Controller('hello-world')
export class HelloWorldController {
  @Get() // Get Request
  welcome(): Object {
    return {message: 'Hello from server!'};
  }
}
