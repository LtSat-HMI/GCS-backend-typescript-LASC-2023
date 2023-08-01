export class Telemetry {
    public id!: string;
    public temperatura!: number;
    public pressao!: number;
    public altitude!: number;

    constructor(props: Omit<Telemetry, 'id'>, _id?: string) {
        Object.assign(this, props);

        if (_id && _id != undefined) {
            this.id = _id;
        }
    }
}