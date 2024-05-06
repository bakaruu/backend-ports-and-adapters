import { Client } from "src/clients/domain/entities/client.entity";
import { User } from "src/users/domain/entities/user.entity";
export declare class Project {
    id: string;
    name: string;
    description: string;
    photoUrl: string;
    users: User[];
    client: Client;
    created_at: Date;
    updated_at: Date;
}
