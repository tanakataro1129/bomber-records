export class Stage {
    public base: BaseStage;
    public type: string;

    constructor(base: BaseStage, type: string) {
        this.base = base;
        this.type = type;
    }

    toString() {
        return this.base + this.type;
    }
}

export enum BaseStage {
    BomTown = 'BomTown',
    PanicIsland = 'PanicIsland',
    CyberSpace = 'CyberSpace',
    QMABomTown = 'QMABomTown',
    HalloweenTown = 'HalloweenTown',
    ChristmasTown = 'ChristmasTown',
    TheKAC8thQualifier = 'TheKAC8thQualifier',
    TheKAC8thFinals = 'TheKAC8thFinals',
    CastleOfAquaBlue = 'CastleOfAquaBlue',
}
