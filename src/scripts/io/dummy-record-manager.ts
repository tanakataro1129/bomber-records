import { Girls } from './../girl/girl';
import { PlayerRanks } from './../record/player_rank';
import { Stages } from './../record/stage';
import { WarRecord } from './../record/record';
import { RecordManager } from './record-manager';
import { Victory } from '../record/victory';

function rand(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
};

var girls = Girls.all();
var stages = [Stages.CastleOfAquaBlue1, Stages.CastleOfAquaBlue2, Stages.CastleOfAquaBlue3];
var ranks = [PlayerRanks.SuperStarC, PlayerRanks.SuperStarB, PlayerRanks.SuperStarA];

export class DummyRecordManager extends RecordManager {
    records: WarRecord[];

    constructor(n: number) {
        super();
        this.records = DummyRecordManager.createDummy(n);
        this.sort();
    }

    selectAll() {
        return this.records;
    }

    LatestN(n: number) {
        return this.records.slice(0, n);
    }

    insert(r: WarRecord) {
        this.records.push(r);
    }

    sort() {
        this.records.sort((a, b) => a.date < b.date ? 1 : -1);
    }

    static createDummy(size: number): WarRecord[] {
        var records = [];
        for (var i = 0; i < size; i++) {
            var date = new Date();
            date.setDate(date.getDate() - rand(30));
            var girl = girls[rand(girls.length)];
            var stage = stages[rand(stages.length)];
            var rank = ranks[rand(ranks.length)];
            var victory = (rand(3) > 1) ? Victory.Win : Victory.Lose;
            records.push(
                new WarRecord(
                    date,
                    new Date(),
                    girl,
                    stage,
                    rank,
                    victory
                )
            );
        }
        return records;
    }
}