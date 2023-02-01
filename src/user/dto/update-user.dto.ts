import { IsNotEmpty, IsNumber } from "class-validator";

export class updateUserDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    address: string;

    @IsNumber()
    @IsNotEmpty()
    age: number
}