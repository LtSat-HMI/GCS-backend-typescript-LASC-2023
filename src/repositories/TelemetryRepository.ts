import modelTelemetry from "@/providers/mongo/models/TelemetryModel";
import { ITelemetryRepository } from "./interfaces/ITelemetryRepository";
import { Telemetry } from "@/entites/Telemetry";

export class TelemetryRepository implements ITelemetryRepository {
    private telemetry = modelTelemetry;
  
      async create(t: Telemetry): Promise<Telemetry | undefined> {
        try {
            const document = await this.telemetry.create(t);
            const { _id, ...rest } = document.toObject();
            return new Telemetry(rest, _id);
        } catch (err) {
          console.log('erro user bd', err);
        }
      }
}