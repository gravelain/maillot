import { Controller, Get } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Get()
  getPlayersWorks(): string {
    return this.playerService.GetPlayersWorks();
  }
}
