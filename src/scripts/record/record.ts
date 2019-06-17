class WarRecord {
    date: Date;
    register_date: Date;
    charactor: Girl;
    stage: Stage;
    rank: PlayerRank;
    victory: Victory;

    constructor(date: Date, register_d: Date, ch: Girl, stage: Stage, rank: PlayerRank, victory: Victory) {
        this.date = date;
        this.register_date = register_d;
        this.charactor = ch;
        this.stage = stage;
        this.rank = rank;
        this.victory = victory;
    }
}