import { Inject } from "@nestjs/common";
import { CarregarPaisRepository } from "src/data/protocols/request";
import { Estado } from "src/domain/models";
import { CarregarPais } from "src/domain/usecases";
import { AxiosAdapter } from "../../adapters";
import { PAIS_REPOSITORY } from "../../axios";

export class PaisRepository implements CarregarPaisRepository {
    constructor(
        @Inject(PAIS_REPOSITORY)
        private readonly requestAdapter: AxiosAdapter
    ) { }

    async carregar(pais: CarregarPais.Parametro): Promise<CarregarPais.Resultado> {
        const { data } = await this.requestAdapter.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${pais}`)

        const paisApi = data.All
        delete data.All

        const chavesEstados = Object.keys(data)

        const estados: Estado[] = chavesEstados.map(chave => {
            const estado = data[chave]

            return {
                nome: chave,
                confirmados: estado.confirmed,
                obitos: estado.deaths,
                ultima_atualizacao: Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'medium' }).format(new Date(estado.updated))
            }
        })

        return {
            pais: {
                nome: paisApi.country,
                expectativa_vida: Number(paisApi.life_expectancy),
                numero_populacao: paisApi.population,
                total_casos_confirmados: paisApi.confirmed,
                total_obitos: paisApi.deaths
            },
            estados
        }
    }
}