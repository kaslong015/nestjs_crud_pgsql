import { IsNotEmpty, IsNumber } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    address: string;

    @IsNumber()
    @IsNotEmpty()
    age: number
}