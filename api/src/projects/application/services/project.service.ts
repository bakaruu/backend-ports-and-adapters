// project.service.ts
import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../../application/dto/create-project.dto';
import { UpdateProjectDto } from '../../application/dto/update-project.dto';
import { CreateProjectPort } from '../../domain/ports/create-project.port';
import { DeleteProjectPort } from '../../domain/ports/delete-project.port';
import { GetProjectPort } from '../../domain/ports/get-project.port';
import { UpdateProjectPort } from '../../domain/ports/update-project.port';
import { Project } from '../../domain/entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    private readonly createProjectPort: CreateProjectPort,
    private readonly updateProjectPort: UpdateProjectPort,
    private readonly getProjectPort: GetProjectPort,
    private readonly deleteProjectPort: DeleteProjectPort,
  ) {}

  createProject(dto: CreateProjectDto): Promise<Project> {
    return this.createProjectPort.createProject(dto);
  }

  updateProject(id: string, dto: UpdateProjectDto): Promise<Project> {
    return this.updateProjectPort.updateProject(id, dto);
  }

  getProject(id: string): Promise<Project> {
    return this.getProjectPort.getProject(id);
  }

  getProjects(): Promise<Project[]> {
    return this.getProjectPort.getProjects();
  }

  deleteProject(id: string): Promise<void> {
    return this.deleteProjectPort.deleteProject(id);
  }
}