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

enum GirlName {
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
    Pastel = 'Pastel',
    Momoko = 'Momoko',
    Aqua = 'Aqua',
    GrimAloe = 'GrimAloe',
}

enum Role {
    Bombmer = 'Bombmer',
    Ataccker = 'Ataccker',
    Shooter = 'Shooter',
    Blocker = 'Blocker',
}

export class Girls {
    public static readonly Shiro = new Girl(GirlName.Shiro, Role.Bombmer);
    public static readonly Kuro = new Girl(GirlName.Kuro, Role.Bombmer);
    public static readonly Shiori = new Girl(GirlName.Shiori, Role.Bombmer);
    public static readonly Gray = new Girl(GirlName.Gray, Role.Bombmer);
    public static readonly Oran = new Girl(GirlName.Oran, Role.Ataccker);
    public static readonly Urushi = new Girl(GirlName.Urushi, Role.Ataccker);
    public static readonly Sepia = new Girl(GirlName.Sepia, Role.Ataccker);
    public static readonly Emera = new Girl(GirlName.Emera, Role.Shooter);
    public static readonly Puple = new Girl(GirlName.Puple, Role.Shooter);
    public static readonly Tsugaru = new Girl(GirlName.Tsugaru, Role.Shooter);
    public static readonly Pastel = new Girl(GirlName.Pastel, Role.Shooter);
    public static readonly Momoko = new Girl(GirlName.Momoko, Role.Blocker);
    public static readonly Aqua = new Girl(GirlName.Aqua, Role.Blocker);
    public static readonly GrimAloe = new Girl(GirlName.GrimAloe, Role.Blocker);

    public static all(): Girl[] {
        return [
            this.Shiro, this.Kuro, this.Shiori, this.Gray,
            this.Oran, this.Urushi, this.Sepia,
            this.Emera, this.Puple, this.Tsugaru, this.Pastel,
            this.Momoko, this.Aqua, this.GrimAloe
        ]
    }
}