import { Stage, Stages } from './stage';
import Moment from "moment";

class BomberEvent {
    public name: string;
    public start: Date;
    public end: Date;
    public stages: Stage[];

    constructor(name: string, start: Date, end: Date, stages: Stage[]) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.stages = stages;
    }

    toString() {
        var start_str = Moment(this.start).format("YYYY/MM/DD");
        var end_str = Moment(this.end).format("YYYY/MM/DD");
        return this.name + "(" + start_str + "～" + end_str + ")";
    }
}

export class Events {
    public static readonly IncreaseThanksgiving = new BomberEvent(
        "Increase Thanksgiving", new Date('2019/7/11'), new Date('2019/8/6'),
        [Stages.PanicIsland1, Stages.PanicIsland2_1, Stages.PanicIsland3, Stages.PanicIsland4]);

    public static all(): BomberEvent[] {
        return [
            this.IncreaseThanksgiving
        ];
    }
}