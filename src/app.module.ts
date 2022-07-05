import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { StrategyModule } from './strategy/strategy.module';

@Module({
  imports: [TaskModule,StrategyModule],
  controllers: [AppController,TaskController],
  providers: [AppService,TaskService],
})
export class AppModule {}
