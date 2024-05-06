"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
let ProjectService = class ProjectService {
    constructor(createProjectPort, updateProjectPort, getProjectPort, deleteProjectPort) {
        this.createProjectPort = createProjectPort;
        this.updateProjectPort = updateProjectPort;
        this.getProjectPort = getProjectPort;
        this.deleteProjectPort = deleteProjectPort;
    }
    createProject(dto) {
        return this.createProjectPort.createProject(dto);
    }
    updateProject(id, dto) {
        return this.updateProjectPort.updateProject(id, dto);
    }
    getProject(id) {
        return this.getProjectPort.getProject(id);
    }
    getProjects() {
        return this.getProjectPort.getProjects();
    }
    deleteProject(id) {
        return this.deleteProjectPort.deleteProject(id);
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], ProjectService);
//# sourceMappingURL=project.service.js.map