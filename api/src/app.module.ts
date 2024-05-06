import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/domain/entities/user.entity'; // Asumiendo que Client es parte del dominio
import { UsersModule } from './users/application/users.module';
import { Client } from './clients/domain/entities/client.entity';
import { ClientsModule } from './clients/application/clients.module';
import { Project } from './projects/domain/entities/project.entity';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'postgres',
      entities: [User, Client, Project], // Agrega todas las entidades que necesitas para TypeORM
      synchronize: true,
    }), // Añade el módulo de clientes si es necesario
    UsersModule,
    ClientsModule,
  ],
  
})
export class AppModule {}
