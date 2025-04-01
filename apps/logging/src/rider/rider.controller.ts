import { Body, Controller, Get, Post } from '@nestjs/common';
import { createRiderDto } from './dto/create-rider.dto';
import { RiderService } from './rider.service';

@Controller('rider')
export class RiderController {
    constructor(private readonly riderService: RiderService) { }
    @Get()
    getRider() {
        return 'Hello from Rider Controller!';
    }
    @Post("create")
    async createRider(@Body() payload: createRiderDto) {
        const result = await this.riderService.create(payload);
        return result;
    }
}
