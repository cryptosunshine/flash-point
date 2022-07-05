import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { StrategyService } from './strategy.service';

@Module({
    imports: [HttpModule],
    providers: [StrategyService],
    exports: [StrategyService],
})
export class StrategyModule { }
