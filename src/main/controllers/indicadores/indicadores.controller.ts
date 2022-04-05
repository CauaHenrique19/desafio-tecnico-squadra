import { Controller, Get, Response } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { controllerAdapter } from "src/main/adapters";
import { ConstruirCarregarIndicadoresController } from "src/main/factories/controllers";

@ApiTags('Indicadores')
@Controller('indicadores')
export class IndicadoresController {
    constructor(
        private readonly construirCarregarIndicadoresController: ConstruirCarregarIndicadoresController
    ) { }

    @Get()
    async carregarIndicadores(@Response() response) {
        const result = await controllerAdapter(this.construirCarregarIndicadoresController.fabricar())
        return response.json(result)
    }
}