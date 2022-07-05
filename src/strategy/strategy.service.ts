import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'

@Injectable()
export class StrategyService {
    public num: number = 0;
    constructor(
        private readonly httpService: HttpService
    ) {

    }
    async loop() {
        this.num++;
        console.log(this.num)
        let result: any = await this.findAll()
        let value = result.data.data[0].value;
        console.log(`市场恐慌指数: ${value}`)
    }

    findAll(): Promise<AxiosResponse<any[]>> {
        return this.httpService.axiosRef.get('https://api.alternative.me/fng/?limit=0&format=json&date_format=cn');
        //                      ^ AxiosInstance interface
    }

}
