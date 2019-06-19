export class Stage {
    public base: BaseStage;
    public type: string;

    constructor(base: BaseStage, type: string) {
        this.base = base;
        this.type = type;
    }
}

export enum BaseStage {
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
