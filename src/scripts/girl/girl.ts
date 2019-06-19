export class Girl {
    public name: string;
    public role: Role;

    constructor(name: string, role: Role) {
        this.name = name;
        this.role = role;
    }
}

export enum Role {
    Bombmer,
    Ataccker,
    Shooter,
    Blocker,
}
