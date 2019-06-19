import { WarRecord } from '../record/record';
import { JsonRecordReader } from './json-reader';

export class JsonFileRecordReader extends JsonRecordReader {
    public path: string;

    constructor(path: string) {
        super();
        this.path = path;
    }

    public async readAll(): Promise<WarRecord[]> {
        const re = await fetch(this.path);
        const recordsJson = await re.json();
        const records = recordsJson.map((r: any) => this.convert(r));
        return records;
    }

    public async read(lower: Date, upper: Date): Promise<WarRecord[]> {
        const re = await fetch(this.path);
        const recordsJson = await re.json();
        const records = this.filter(recordsJson, lower, upper);
        return records;
    }
}
