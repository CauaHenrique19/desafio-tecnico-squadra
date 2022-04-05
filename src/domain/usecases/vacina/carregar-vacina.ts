import { Vacina } from "src/domain/models";

export interface CarregarVacina {
    carregar: (pais: CarregarVacina.Parametro) => Promise<CarregarVacina.Resultado>
}

export namespace CarregarVacina {
    export type Parametro = string
    export type Resultado = Vacina
}