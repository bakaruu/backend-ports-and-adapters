// create-project.adapter.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from '../../application/dto/create-project.dto';
import { Project } from '../../domain/entities/project.entity';
import { CreateProjectPort } from '../../domain/ports/create-project.port';

@Injectable()
export class CreateProjectAdapter implements CreateProjectPort {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }
}
