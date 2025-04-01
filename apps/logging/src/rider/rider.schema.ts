import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Rider {
    @Prop({ required: true })
    lat: number;
    @Prop({ required: true })
    lng: number;
    @Prop({ required: true })
    rider: string;
}
export const RiderSchema = SchemaFactory.createForClass(Rider);