import { TelemetryRepository } from "@/repositories/TelemetryRepository";
import { getPayloadUseCase } from "./getPayload/getPayloadUseCase";
import { getPayloadController } from "./getPayload/getPayloadController";
import { getAllTelemetryUseCase } from "./getAll/getAllTelemetryUseCase";
import { getAllTelemetryController } from "./getAll/getAllTelemetryController";

const mongoTelemetryRepository = new TelemetryRepository();

const getTelemetryusecase = new getPayloadUseCase(
    mongoTelemetryRepository
);

const getAllTelemetryusecase = new getAllTelemetryUseCase(
    mongoTelemetryRepository
);

const getTelemetrycontroller = new getPayloadController(
    getTelemetryusecase
);

const getallTelemetrycontroller = new getAllTelemetryController(
    getAllTelemetryusecase
);

export {
    getTelemetrycontroller,
    getallTelemetrycontroller
}