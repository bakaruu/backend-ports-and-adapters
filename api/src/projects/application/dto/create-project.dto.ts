import { IsNotEmpty, IsString, IsOptional, IsArray } from 'class-validator';

export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    photoUrl?: string;

    @IsNotEmpty()
    @IsArray()
    userIds: string[];

    @IsNotEmpty()
    @IsString()
    clientId: string;
}