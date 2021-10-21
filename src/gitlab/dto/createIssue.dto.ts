import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class createIssueDto {

    @ApiProperty({example: 'This is a title'})
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({example: 'This is a description'})
    @IsString()
    description: string;
}