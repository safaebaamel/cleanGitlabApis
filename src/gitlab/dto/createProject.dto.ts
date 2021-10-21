import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class createProjectDto {

    @ApiProperty({example: 'This is my project'})
    @IsString()
    @IsNotEmpty()
    name: string;
}