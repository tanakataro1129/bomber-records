import { _girls } from '../assets/constants/girls';
import { WarRecord } from './record/record';
import { Victory } from './record/victory';
import { Stage, BaseStage } from './record/stage';
import { PlayerRank, RankClass, RankLevel } from './record/player_rank';

function rand(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
};

var stages = [new Stage(BaseStage.CastleOfAquaBlue, '1'), new Stage(BaseStage.CastleOfAquaBlue, '2'), new Stage(BaseStage.CastleOfAquaBlue, '3'),];
var ranks = [new PlayerRank(RankClass.SuperStar, RankLevel.C), new PlayerRank(RankClass.SuperStar, RankLevel.B), new PlayerRank(RankClass.SuperStar, RankLevel.A),]

export function createDummy(size: number) {
    var records = [];
    for (var i = 0; i < size; i++) {
        var girl = _girls[rand(_girls.length)];
        var stage = stages[rand(stages.length)];
        var rank = ranks[rand(ranks.length)];
        var victory = (rand(3) > 1) ? Victory.Win : Victory.Lose;
        records.push(
            new WarRecord(
                new Date(),
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