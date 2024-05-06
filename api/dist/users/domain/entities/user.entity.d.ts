export declare class User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    jobTitle: string;
    photoUrl: string;
    created_at: Date;
    updated_at: Date;
}
export declare enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER"
}
