import { Controller, Get } from '@nestjs/common';

@Controller('rider')
export class RiderController {
    @Get()
    getRider() {
        return 'Hello from Rider Controller!';
    }
}
