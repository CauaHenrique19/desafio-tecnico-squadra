import { CarregarPaisRepository } from "src/data/protocols/request";
import { CarregarPais } from "src/domain/usecases";

export class RequestCarregarPais implements CarregarPais {
    constructor(
        private readonly carregarPaisRepository: CarregarPaisRepository
    ) { }

    async carregar(pais: CarregarPais.Parametro): Promise<CarregarPais.Resultado> {
        return await this.carregarPaisRepository.carregar(pais)
    }
}