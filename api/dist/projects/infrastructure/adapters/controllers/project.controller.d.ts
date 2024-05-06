import { CreateProjectDto } from '../../../application/dto/create-project.dto';
import { UpdateProjectDto } from '../../../application/dto/update-project.dto';
import { ProjectService } from '../../../application/services/project.service';
import { Project } from '../../../domain/entities/project.entity';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(dto: CreateProjectDto): Promise<Project>;
    updateProject(id: string, dto: UpdateProjectDto): Promise<Project>;
    getProject(id: string): Promise<Project>;
    getProjects(): Promise<Project[]>;
    deleteProject(id: string): Promise<void>;
}
