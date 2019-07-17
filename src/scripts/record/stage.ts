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

enum BaseStage {
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

// should i use database or csv?
export class Stages {
    public static readonly BomTown1 = new Stage(BaseStage.BomTown, '1');
    public static readonly BomTown2 = new Stage(BaseStage.BomTown, '2');
    public static readonly BomTown2_1 = new Stage(BaseStage.BomTown, '2.1');
    public static readonly BomTown3 = new Stage(BaseStage.BomTown, '3');
    public static readonly BomTown4 = new Stage(BaseStage.BomTown, '4');
    public static readonly BomTown5 = new Stage(BaseStage.BomTown, '5');
    public static readonly PanicIsland1 = new Stage(BaseStage.PanicIsland, '1');
    public static readonly PanicIsland2 = new Stage(BaseStage.PanicIsland, '2');
    public static readonly PanicIsland2_1 = new Stage(BaseStage.PanicIsland, '2.1');
    public static readonly PanicIsland3 = new Stage(BaseStage.PanicIsland, '3');
    public static readonly PanicIsland4 = new Stage(BaseStage.PanicIsland, '4');
    public static readonly CyberSpace2 = new Stage(BaseStage.CyberSpace, '2');
    public static readonly CyberSpace3 = new Stage(BaseStage.CyberSpace, '3');
    public static readonly CyberSpace4 = new Stage(BaseStage.CyberSpace, '4');
    public static readonly QMABomTown = new Stage(BaseStage.QMABomTown, '');
    public static readonly HalloweenTown1 = new Stage(BaseStage.HalloweenTown, '1');
    public static readonly HalloweenTown2 = new Stage(BaseStage.HalloweenTown, '2');
    public static readonly ChristmasTown1 = new Stage(BaseStage.ChristmasTown, '1');
    public static readonly ChristmasTown2 = new Stage(BaseStage.ChristmasTown, '2');
    public static readonly TheKAC8thQualifier = new Stage(BaseStage.TheKAC8thQualifier, '');
    public static readonly TheKAC8thFinals = new Stage(BaseStage.TheKAC8thFinals, '');
    public static readonly CastleOfAquaBlue1 = new Stage(BaseStage.CastleOfAquaBlue, '1');
    public static readonly CastleOfAquaBlue2 = new Stage(BaseStage.CastleOfAquaBlue, '2');
    public static readonly CastleOfAquaBlue3 = new Stage(BaseStage.CastleOfAquaBlue, '3');

    public static all(): Stage[] {
        // bad...
        return [
            this.BomTown1, this.BomTown2, this.BomTown2_1, this.BomTown3, this.BomTown4, this.BomTown5,
            this.PanicIsland1, this.PanicIsland2, this.PanicIsland2_1, this.PanicIsland3, this.PanicIsland4,
            this.CyberSpace2, this.CyberSpace3, this.CyberSpace4,
            this.QMABomTown, this.HalloweenTown1, this.HalloweenTown2,
            this.ChristmasTown1, this.ChristmasTown2, this.TheKAC8thQualifier, this.TheKAC8thFinals,
            this.CastleOfAquaBlue1, this.CastleOfAquaBlue2, this.CastleOfAquaBlue3
        ]
    }
}
