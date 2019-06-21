export class Girl {
    public name: string;
    public role: Role;

    constructor(name: string, role: Role) {
        this.name = name;
        this.role = role;
    }

    toString() {
        return this.name;
    }
}

export enum Role {
    Bombmer = 'Bombmer',
    Ataccker = 'Ataccker',
    Shooter = 'Shooter',
    Blocker = 'Blocker',
}
