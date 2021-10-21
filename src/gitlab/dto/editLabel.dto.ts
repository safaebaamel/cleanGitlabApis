import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class editLabelDto {

    @ApiProperty({example: 'This is a new name'})
    @IsString()
    new_name: string;

    @ApiProperty({example: '#FFAABB'})
    @IsString()
    color: string;
}