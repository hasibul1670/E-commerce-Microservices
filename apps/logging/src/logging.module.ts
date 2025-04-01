import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderModule } from './rider/rider.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/logging-service_db'), RiderModule,],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule { }
