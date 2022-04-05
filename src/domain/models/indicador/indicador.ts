import { Estado } from "../estado";
import { Pais } from "../pais";
import { Vacina } from "../vacina";

export interface Indicador {
    pais: Pais & Vacina
    estados: Estado[]
}