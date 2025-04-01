import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createRiderDto {
    @IsNumber()
    @IsNotEmpty()
    lng: number;

    @IsNumber()
    @IsNotEmpty()
    lat: number;

    @IsNotEmpty()
    @IsString()
    rider: string;
}