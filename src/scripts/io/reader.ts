import { WarRecord } from '../record/record';

export interface RecordReader {
    readAll(): Promise<WarRecord[]>;
    read(lower: Date, upper: Date): Promise<WarRecord[]>;
}
