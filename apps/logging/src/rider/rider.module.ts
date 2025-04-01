import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderController } from './rider.controller';
import { Rider, RiderSchema } from './rider.schema';
import { RiderService } from './rider.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Rider.name, schema: RiderSchema },
    ]),
  ],
  controllers: [RiderController],
  providers: [RiderService]
})
export class RiderModule { }
