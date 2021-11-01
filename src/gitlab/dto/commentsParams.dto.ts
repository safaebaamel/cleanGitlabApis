import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class commentsParams {

    @ApiProperty({example: '75'})
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty({example: '5'})
    @IsString()
    issue_iid: string;
}