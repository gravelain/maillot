import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  test: string = 'Players Service Works !';

  GetPlayersWorks(): string {
    return this.test;
  }
}
