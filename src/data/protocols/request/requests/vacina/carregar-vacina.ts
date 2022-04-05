import { CarregarVacina } from "src/domain/usecases";

export interface CarregarVacinaRepository {
    carregar: (pais: CarregarVacinaRepository.Parametro) => Promise<CarregarVacinaRepository.Resultado>
}

export namespace CarregarVacinaRepository {
    export type Parametro = CarregarVacina.Parametro
    export type Resultado = CarregarVacina.Resultado
}