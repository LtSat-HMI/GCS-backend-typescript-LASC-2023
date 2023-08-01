import { ITelemetryRepository } from "@/repositories/interfaces/ITelemetryRepository";

export class getAllTelemetryUseCase {
    constructor(
        private telemetryRepository: ITelemetryRepository,
    ) {}
    async execute() {
        const payload = await this.telemetryRepository.findAll();
        if (payload && payload != undefined) {
            return payload;
        }
    }
}