import { Estado, Pais } from "src/domain/models";

export interface CarregarPais {
    carregar: (pais: CarregarPais.Parametro) => Promise<CarregarPais.Resultado>
}

export namespace CarregarPais {
    export type Parametro = string
    export type Resultado = {
        pais: Pais
        estados: Estado[]
    }
}