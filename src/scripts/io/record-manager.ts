import { WarRecord } from '../record/record';

export interface RecordManager {
    selectAll(): WarRecord[];
    LatestN(n: number): WarRecord[];
    insert(r: WarRecord): void;
}