import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { RiderModule } from './rider/rider.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:root@localhost:27017/logging_db?authSource=admin'), RiderModule,],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule { }
