import { Response } from "express";
import { getAllTelemetryUseCase } from "./getAllTelemetryUseCase";

export class getAllTelemetryController {
    constructor(
        private getuseCase: getAllTelemetryUseCase,
    ) {}

    async handle(response: Response): Promise<Response> {
            try {
                    const payload = await this.getuseCase.execute();
                    if (payload && payload != undefined) {
                        return response.status(200).json(payload).send();
                    }
                    return response.status(400).end();
                } catch {
                    return response.status(400).json({
                    message: 'Unexpected error'
                });
        }
    }
}