export class TelemetrySerial {
    public count!: number;
    public temperatura!: number;
    public altitude!: number;
    public tensao!: number;
    public gpsLatitude!: number;
    public gpsLongitude!: number;
    public gpsAltura!: number;
    public giroscopioR!: number;
    public giroscopioP!: number;
    public giroscopioY!: number;
    public acelerometroR!: number;
    public acelerometroP!: number;
    public acelerometroY!: number;
    public magnetometroP!: number;
    public magnetometroR!: number;
    public magnetometroY!: number;

    constructor(props: unknown) {
        Object.assign(this, props);
    }
}