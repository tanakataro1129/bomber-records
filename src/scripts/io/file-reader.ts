class JsonFileRecordReader extends JsonRecordReader {
    path: string;

    constructor(path: string) {
        super();
        this.path = path;
    }

    async readAll(): Promise<WarRecord[]> {
        const re = await fetch(this.path);
        const records_json = await re.json();
        const records = records_json.map((r: any) => this.convert(r));
        return records;
    }

    async read(lower: Date, upper: Date): Promise<WarRecord[]> {
        const re = await fetch(this.path);
        const records_json = await re.json();
        const records = this.filter(records_json, lower, upper);
        return records;
    }
}