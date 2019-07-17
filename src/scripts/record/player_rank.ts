export class PlayerRank {
    public rankClass: RankClass;
    public rankLevel: RankLevel;

    constructor(cls: RankClass, lv: RankLevel) {
        this.rankClass = (cls) ? cls : RankClass.Unknown;
        this.rankLevel = (lv) ? lv : RankLevel.Unknown;
    }

    toString() {
        return this.rankClass + this.rankLevel
    }
}

enum RankClass {
    Unknown = '??????',
    Beginner = 'Beginner',
    Rookie = 'Rookie',
    Regular = 'Regular',
    Star = 'Star',
    SuperStar = 'SuperStar',
    Master = 'Master',
}

enum RankLevel {
    Unknown = '?',
    C = 'C',
    B = 'B',
    A = 'A',
}

export class PlayerRanks {
    public static readonly BeginnerC = new PlayerRank(RankClass.Beginner, RankLevel.C);
    public static readonly BeginnerB = new PlayerRank(RankClass.Beginner, RankLevel.B);
    public static readonly BeginnerA = new PlayerRank(RankClass.Beginner, RankLevel.A);
    public static readonly RookieC = new PlayerRank(RankClass.Rookie, RankLevel.C);
    public static readonly RookieB = new PlayerRank(RankClass.Rookie, RankLevel.B);
    public static readonly RookieA = new PlayerRank(RankClass.Rookie, RankLevel.A);
    public static readonly RegularC = new PlayerRank(RankClass.Regular, RankLevel.C);
    public static readonly RegularB = new PlayerRank(RankClass.Regular, RankLevel.B);
    public static readonly RegularA = new PlayerRank(RankClass.Regular, RankLevel.A);
    public static readonly StarC = new PlayerRank(RankClass.Star, RankLevel.C);
    public static readonly StarB = new PlayerRank(RankClass.Star, RankLevel.B);
    public static readonly StarA = new PlayerRank(RankClass.Star, RankLevel.A);
    public static readonly SuperStarC = new PlayerRank(RankClass.SuperStar, RankLevel.C);
    public static readonly SuperStarB = new PlayerRank(RankClass.SuperStar, RankLevel.B);
    public static readonly SuperStarA = new PlayerRank(RankClass.SuperStar, RankLevel.A);
    public static readonly MasterC = new PlayerRank(RankClass.Master, RankLevel.C);
    public static readonly MasterB = new PlayerRank(RankClass.Master, RankLevel.B);
    public static readonly MasterA = new PlayerRank(RankClass.Master, RankLevel.A);

    public static all(): PlayerRank[] {
        return [
            this.BeginnerC, this.BeginnerB, this.BeginnerA,
            this.RookieC, this.RookieB, this.RookieA,
            this.RegularC, this.RegularB, this.RegularA,
            this.StarC, this.StarB, this.StarA,
            this.SuperStarC, this.SuperStarB, this.SuperStarA,
            this.MasterC, this.MasterB, this.MasterA
        ];
    }
}