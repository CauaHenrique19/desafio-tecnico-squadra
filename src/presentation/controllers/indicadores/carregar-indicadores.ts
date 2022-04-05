import { Indicador } from "src/domain/models";
import { CarregarPais, CarregarVacina } from "src/domain/usecases";
import { serverError } from "src/presentation/helpers";
import { Controller } from "src/presentation/protocols";

export class CarregarIndicadoresController implements Controller {
    constructor(
        private readonly carregarPais: CarregarPais,
        private readonly carregarVacina: CarregarVacina
    ) { }

    async lidar(): Promise<any> {
        try {
            const PAIS = 'Brazil'
            const pais = await this.carregarPais.carregar(PAIS)
            const dadosVacinacao = await this.carregarVacina.carregar(PAIS)

            const indicador: Indicador = {
                pais: {
                    ...pais.pais,
                    ...dadosVacinacao
                },
                estados: pais.estados
            }

            return indicador
        }
        catch (error) {
            return serverError(error)
        }
    }
}