import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  say: string = 'Hello Thierry !';

  getHelloWorld(): string {
    return this.say;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
