import { Request, Response } from "express";
import { getPayloadUseCase } from "./getPayloadUseCase";

export class getPayloadController {
    constructor(
        private getuseCase: getPayloadUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { count } = request.body; 
            try {
                if (count) {
                    const payload = await this.getuseCase.execute(count);
                    if (payload && payload != undefined) {
                        return response.status(200).json(payload).send();
                    }
                    return response.status(400).end();
                }
                return response.status(400).end();
            }
            catch {
                return response.status(400).json({
                    message: 'Unexpected error'
                });
        }
    }
}