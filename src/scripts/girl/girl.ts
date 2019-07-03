export class Girl {
    public name: GirlName;
    public role: Role;

    constructor(name: GirlName, role: Role) {
        this.name = name;
        this.role = role;
    }

    toString() {
        return this.name;
    }
}

export enum GirlName {
    Shiro = 'Shiro',
    Kuro = 'Kuro',
    Shiori = 'Shiori',
    Gray = 'Gray',
    Oran = 'Oran',
    Urushi = 'Urushi',
    Sepia = 'Sepia',
    Emera = 'Emera',
    Puple = 'Puple',
    Tsugaru = 'Tsugaru',
    Momoko = 'Momoko',
    Aqua = 'Aqua',
    GrimAloe = 'GrimAloe',
}

export enum Role {
    Bombmer = 'Bombmer',
    Ataccker = 'Ataccker',
    Shooter = 'Shooter',
    Blocker = 'Blocker',
}
