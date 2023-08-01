export class Telemetry {
    public id!: string;
    public count!: number;
    public Temperatura!: number;
    public Altitude!: number;
    public Tensao!: number;
    public GpsLatitude!: number;
    public GpsLongitude!: number;
    public GpsAltura!: number;
    public GiroscopioR!: number;
    public GiroscopioP!: number;
    public GiroscopioY!: number;
    public AcelerometroR!: number;
    public AcelerometroP!: number;
    public AcelerometroY!: number;
    public MagnetometroP!: number;
    public MagnetometroR!: number;
    public MagnetometroY!: number;

    constructor(props: Omit<Telemetry, 'id'>, _id?: string) {
        Object.assign(this, props);

        if (_id && _id != undefined) {
            this.id = _id;
        }
    }
}