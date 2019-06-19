export class PlayerRank {
    public rankClass: RankClass;
    public rankLevel: RankLevel;

    constructor(cls: RankClass, lv: RankLevel) {
        this.rankClass = (cls) ? cls : RankClass.Unknown;
        this.rankLevel = (lv) ? lv : RankLevel.Unknown;
    }
}

export enum RankClass {
    Unknown,
    Beginner,
    Rookie,
    Regular,
    Star,
    SuperStar,
    Master,
}

export enum RankLevel {
    Unknown,
    C,
    B,
    A,
}
