import { Girl } from '../girl/girl';
import { Stage } from './stage';
import { PlayerRank } from './player_rank';
import { Victory } from './victory';

export class WarRecord {
    public date: Date;
    public registerDate: Date;
    public charactor: Girl;
    public stage: Stage;
    public rank: PlayerRank;
    public victory: Victory;

    constructor(date: Date, registerDate: Date, ch: Girl, stage: Stage, rank: PlayerRank, victory: Victory) {
        this.date = date;
        this.registerDate = registerDate;
        this.charactor = ch;
        this.stage = stage;
        this.rank = rank;
        this.victory = victory;
    }
}
