import { CarregarPais } from "src/domain/usecases";

export interface CarregarPaisRepository {
    carregar: (pais: CarregarPaisRepository.Parametro) => Promise<CarregarPaisRepository.Resultado>
}

export namespace CarregarPaisRepository {
    export type Parametro = CarregarPais.Parametro
    export type Resultado = CarregarPais.Resultado
}