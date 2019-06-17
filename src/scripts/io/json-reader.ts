abstract class JsonRecordReader implements RecordReader {
    abstract readAll(): Promise<WarRecord[]>;
    abstract read(lower: Date, upper: Date): Promise<WarRecord[]>;

    filter(records: any[], lower: Date = new Date(0), upper: Date = new Date()): WarRecord[] {
        const filtered = records
            .filter((r: any) => lower <= r.date && r.date <= upper)
            .map((r: any) => this.convert(r));
        return filtered;
    }

    convert(r: any): WarRecord {
        return {
            date: r.date,
            register_date: r.register_date,
            charactor: r.charactor,
            stage: r.stage,
            rank: r.rank,
            victory: r.victory,
        } as WarRecord;
    }
}