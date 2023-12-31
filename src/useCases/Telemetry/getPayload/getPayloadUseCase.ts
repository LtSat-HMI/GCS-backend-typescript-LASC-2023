import { ITelemetryRepository } from "@/repositories/interfaces/ITelemetryRepository";
import { getPayloadDTO } from "./getPayloadDTO";

export class getPayloadUseCase {
    constructor(
        private telemetryRepository: ITelemetryRepository,
    ) {}
    async execute(
        data: getPayloadDTO
    ) {
        if (data.countId) {
        const payload = await this.telemetryRepository.findForCount(data.countId);
        if (payload && payload != undefined) {
            return payload;
        }
        }
    }
}