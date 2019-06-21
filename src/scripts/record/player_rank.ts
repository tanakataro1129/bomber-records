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

export enum RankClass {
    Unknown = '??????',
    Beginner = 'Beginner',
    Rookie = 'Rookie',
    Regular = 'Regular',
    Star = 'Star',
    SuperStar = 'SuperStar',
    Master = 'Master',
}

export enum RankLevel {
    Unknown = '?',
    C = 'C',
    B = 'B',
    A = 'A',
}
