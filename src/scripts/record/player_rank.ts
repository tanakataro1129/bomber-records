class PlayerRank {
    rank_class: RankClass;
    rank_level: RankLevel;

    constructor(cls: RankClass, lv: RankLevel) {
        this.rank_class = (cls)? cls : RankClass.Unknown;
        this.rank_level = (lv)? lv : RankLevel.Unknown;
    }
}

enum RankClass {
    Unknown,
    Beginner,
    Rookie,
    Regular,
    Star,
    SuperStar,
    Master,
}

namespace RankClass {
    export function name(rank_class: RankClass) {
        switch(rank_class) {
            case RankClass.Beginner:
                return "Beginner";
            case RankClass.Rookie:
                return "Rookie";
            case RankClass.Regular:
                return "Regular";
            case RankClass.Star:
                return "Star";
            case RankClass.SuperStar:
                return "SuperStar";
            case RankClass.Master:
                return "Master";
            default:
                return "Unknown";
        }
    }
}

enum RankLevel {
    Unknown,
    C,
    B,
    A,
}