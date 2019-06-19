import { RecordReader } from './reader';
import { WarRecord } from '../record/record';

export abstract class JsonRecordReader implements RecordReader {
    public abstract readAll(): Promise<WarRecord[]>;
    public abstract read(lower: Date, upper: Date): Promise<WarRecord[]>;

    protected filter(records: any[], lower: Date = new Date(0), upper: Date = new Date()): WarRecord[] {
        const filtered = records
            .filter((r: any) => lower <= r.date && r.date <= upper)
            .map((r: any) => this.convert(r));
        return filtered;
    }

    protected convert(r: any): WarRecord {
        return {
            date: r.date,
            registerDate: r.registerDate,
            charactor: r.charactor,
            stage: r.stage,
            rank: r.rank,
            victory: r.victory,
        } as WarRecord;
    }
}
