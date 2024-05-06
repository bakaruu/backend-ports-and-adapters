import { CreateProjectDto } from '../../application/dto/create-project.dto';
import { UpdateProjectDto } from '../../application/dto/update-project.dto';
import { CreateProjectPort } from '../../domain/ports/create-project.port';
import { DeleteProjectPort } from '../../domain/ports/delete-project.port';
import { GetProjectPort } from '../../domain/ports/get-project.port';
import { UpdateProjectPort } from '../../domain/ports/update-project.port';
import { Project } from '../../domain/entities/project.entity';
export declare class ProjectService {
    private readonly createProjectPort;
    private readonly updateProjectPort;
    private readonly getProjectPort;
    private readonly deleteProjectPort;
    constructor(createProjectPort: CreateProjectPort, updateProjectPort: UpdateProjectPort, getProjectPort: GetProjectPort, deleteProjectPort: DeleteProjectPort);
    createProject(dto: CreateProjectDto): Promise<Project>;
    updateProject(id: string, dto: UpdateProjectDto): Promise<Project>;
    getProject(id: string): Promise<Project>;
    getProjects(): Promise<Project[]>;
    deleteProject(id: string): Promise<void>;
}
