import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { StrategyService } from 'src/strategy/strategy.service';

@Injectable()
export class TaskService {
    constructor(
        private strategy: StrategyService
    ){
        this.strategy.loop()
    }
    private readonly logger = new Logger(TaskService.name);

    @Cron(CronExpression.EVERY_10_SECONDS)
    async handleCron() {
        this.strategy.loop()
    }

    // @Cron(CronExpression.EVERY_5_SECONDS)
    // async handleCron2() {
    //     this.logger.debug('Called every 5 seconds');
    // }

    // @Timeout(1000)
    // handleTimeout() {
    //     this.logger.debug('Called once after 1 seconds');
    // }
}
