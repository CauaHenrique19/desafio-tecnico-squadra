import { Module } from "@nestjs/common";
import { paisProvider, vacinaProvider } from "src/infra/request/providers";
import { PaisRepository, VacinaRepository } from "src/infra/request/repositories";
import { carregarPaisFactory } from "./pais";
import { carregarVacinaFactory } from "./vacina";

@Module({
    providers: [
        PaisRepository,
        VacinaRepository,

        paisProvider,
        vacinaProvider,

        carregarPaisFactory,
        carregarVacinaFactory
    ],
    exports: [
        carregarPaisFactory,
        carregarVacinaFactory
    ]
})
export class FactoryModule { }