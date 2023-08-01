import { Telemetry } from '@/entites/Telemetry';
import mongoose, { Schema, Document } from 'mongoose';

const db = mongoose.connection.useDb('Content');

export type ITelemetrySchema = Telemetry & Document;

const telemetrySchema: Schema = new Schema(
  {
    count: {type: Number },
    Temperatura: { type: Number },
    Altitude: { type: Number },
    Tensao: { type: Number },
    GpsLatitude: { Number },
    GpsLongitude: { Number },
    GpsAltura: { Number },
    GiroscopioR: { Number },
    GiroscopioP: { Number },
    GiroscopioY: { Number },
    AcelerometroR: { Number },
    AcelerometroP: { Number },
    AcelerometroY: { Number },
    MagnetometroP: { Number },
    MagnetometroR: { Number },
    MagnetometroY: { Number },
  },
  {
    collection: 'Telemetry',
  },
);

telemetrySchema.set('toJSON', {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  transform(__: any, ret: any, _: any) {
    ret.id = ret._id;
    delete ret.__v;
  },
});

const modelTelemetry = db.model<ITelemetrySchema>('Telemetry', telemetrySchema);

export default modelTelemetry;
