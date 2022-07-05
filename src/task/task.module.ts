import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { StrategyModule } from 'src/strategy/strategy.module';

@Module({
  imports: [ScheduleModule.forRoot(),StrategyModule],
})
export class TaskModule {}
