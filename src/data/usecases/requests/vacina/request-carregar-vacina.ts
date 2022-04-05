import { CarregarVacinaRepository } from "src/data/protocols/request";
import { CarregarVacina } from "src/domain/usecases";

export class RequestCarregarVacina implements CarregarVacina {
    constructor(
        private readonly carregarVacinaRepository: CarregarVacinaRepository
    ) { }

    async carregar(pais: CarregarVacina.Parametro): Promise<CarregarVacina.Resultado> {
        return await this.carregarVacinaRepository.carregar(pais)
    }
}
