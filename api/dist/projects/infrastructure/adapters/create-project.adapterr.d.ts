import { Repository } from 'typeorm';
import { CreateProjectDto } from '../../application/dto/create-project.dto';
import { Project } from '../../domain/entities/project.entity';
import { CreateProjectPort } from '../../domain/ports/create-project.port';
export declare class CreateProjectAdapter implements CreateProjectPort {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    createProject(createProjectDto: CreateProjectDto): Promise<Project>;
}
