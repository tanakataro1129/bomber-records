class Stage {
    base: BaseStage;
    type: string;
    is_higher: boolean;

    constructor(base: BaseStage, type: string, higher: boolean) {
        this.base = base;
        this.type = type;
        this.is_higher = higher;
    }
}

enum BaseStage {
    BomTown,
    PanicIsland,
    CyberSpace,
    QMABomTown,
    HalloweenTown,
    ChristmasTown,
    TheKAC8thQualifier,
    TheKAC8thFinals,
    CastleOfAqua,
}