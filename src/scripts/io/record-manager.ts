import { WarRecord } from '../record/record';

export abstract class RecordManager {
    abstract selectAll(): WarRecord[];
    abstract LatestN(n: number): WarRecord[];
    abstract insert(r: WarRecord): void;

    period(lower: Date, upper: Date): WarRecord[] {
        var low_valid = lower && !isNaN(lower.getTime());
        var upper_valid = upper && !isNaN(upper.getTime());
        var records = this.selectAll()
            .filter(r => !low_valid || r.date >= lower)
            .filter(r => !upper_valid || r.date <= upper);
        return records;
    }
}