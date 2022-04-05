import { Module } from "@nestjs/common";
import { ConstruirCarregarIndicadoresController } from "src/main/factories/controllers";
import { FactoryModule } from "src/main/factories/usecases/factory.module";
import { IndicadoresController } from "./indicadores.controller";

@Module({
    imports: [FactoryModule],
    controllers: [IndicadoresController],
    providers: [ConstruirCarregarIndicadoresController]
})
export class IndicadoresModule { }