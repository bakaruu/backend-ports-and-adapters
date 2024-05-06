import { CreateProjectDto } from '../../application/dto/create-project.dto';
import { Project } from '../entities/project.entity';
export interface CreateProjectPort {
    createProject(createProjectDto: CreateProjectDto): Promise<Project>;
}
