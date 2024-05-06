import { IsNotEmpty, IsString, IsOptional, IsArray } from 'class-validator';

export class UpdateProjectDto {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    photoUrl?: string;

    @IsOptional()
    @IsArray()
    userIds?: string[];

    @IsOptional()
    @IsString()
    clientId?: string;
}