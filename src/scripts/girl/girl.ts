class Girl {
    name: string;
    role: Role;

    constructor(name: string, role: Role) {
        this.name = name;
        this.role = role;
    }
}

enum Role {
    Bombmer,
    Ataccker,
    Shooter,
    Blocker,
}