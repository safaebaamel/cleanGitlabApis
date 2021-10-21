import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class createLabelDto {

    @ApiProperty({example: 'This is my label'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: '#FFAABB'})
    @IsString()
    color: string;
}