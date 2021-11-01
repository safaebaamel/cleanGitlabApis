import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class commentIssueDto {

    @ApiProperty({example: 'This is a comment inside an issue'})
    @IsString()
    @IsNotEmpty()
    body: string;
}