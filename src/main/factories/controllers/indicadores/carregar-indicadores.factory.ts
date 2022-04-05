import { Inject } from "@nestjs/common";
import { CarregarPais, CarregarVacina } from "src/domain/usecases";
import { CarregarIndicadoresController } from "src/presentation/controllers/indicadores";
import { Controller } from "src/presentation/protocols";
import { CARREGAR_PAIS_FACTORY, CARREGAR_VACINA_FACTORY } from "../../providers";

export class ConstruirCarregarIndicadoresController {
    constructor(
        @Inject(CARREGAR_PAIS_FACTORY)
        private readonly carregarPais: CarregarPais,

        @Inject(CARREGAR_VACINA_FACTORY)
        private readonly carregarVacina: CarregarVacina
    ) { }

    public fabricar(): Controller {
        return new CarregarIndicadoresController(this.carregarPais, this.carregarVacina)
    }
}