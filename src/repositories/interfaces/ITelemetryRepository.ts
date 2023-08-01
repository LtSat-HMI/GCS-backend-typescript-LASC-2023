import { Telemetry } from "@/entites/Telemetry";

export interface ITelemetryRepository {
    create(media: Telemetry): Promise<Telemetry | undefined>;
    findAll(): Promise<Telemetry[] | undefined>;
    findForCount(countValue: number): Promise<Telemetry[] | undefined>;
  }