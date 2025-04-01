import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createRiderDto } from './dto/create-rider.dto';
import { Rider } from './rider.schema';

@Injectable()
export class RiderService {
    constructor(@InjectModel(Rider.name) private riderModel: Model<Rider>) { }
    async create(payload: createRiderDto): Promise<createRiderDto> {
        try {
            const res = await this.riderModel.create(payload);
            return res;
        } catch (error) {
            throw error;
        }
    }

}
