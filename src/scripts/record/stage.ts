class Stage {
    base: BaseStage;
    type: string;

    constructor(base: BaseStage, type: string) {
        this.base = base;
        this.type = type;
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
    CastleOfAquaBlue,
}
