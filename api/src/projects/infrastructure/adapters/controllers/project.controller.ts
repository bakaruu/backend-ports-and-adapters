// project.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProjectDto } from '../../../application/dto/create-project.dto';
import { UpdateProjectDto } from '../../../application/dto/update-project.dto';
import { ProjectService } from '../../../application/services/project.service';
import { Project } from '../../../domain/entities/project.entity';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  createProject(@Body() dto: CreateProjectDto): Promise<Project> {
    return this.projectService.createProject(dto);
  }

  @Put(':id')
  updateProject(@Param('id') id: string, @Body() dto: UpdateProjectDto): Promise<Project> {
    return this.projectService.updateProject(id, dto);
  }

  @Get(':id')
  getProject(@Param('id') id: string): Promise<Project> {
    return this.projectService.getProject(id);
  }

  @Get()
  getProjects(): Promise<Project[]> {
    return this.projectService.getProjects();
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectService.deleteProject(id);
  }
}