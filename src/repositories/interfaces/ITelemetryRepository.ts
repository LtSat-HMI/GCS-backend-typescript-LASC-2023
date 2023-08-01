import { Telemetry } from "@/entites/Telemetry";

export interface ITelemetryRepository {
    create(media: Telemetry): Promise<Telemetry | undefined>;
  }