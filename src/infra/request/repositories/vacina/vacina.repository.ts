import { Inject } from "@nestjs/common";
import { CarregarVacinaRepository, Get } from "src/data/protocols/request";
import { CarregarVacina } from "src/domain/usecases";
import { AxiosAdapter } from "../../adapters";
import { VACINA_REPOSITORY } from "../../axios";

export class VacinaRepository implements CarregarVacinaRepository {
    constructor(
        @Inject(VACINA_REPOSITORY)
        private readonly requestAdapter: AxiosAdapter
    ) { }

    async carregar(pais: CarregarVacina.Parametro): Promise<CarregarVacina.Resultado> {
        const { data } = await this.requestAdapter.get(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${pais}`)
        const dados = data.All

        return {
            total_doses_aplicadas: dados.administered,
            pessoas_vacinadas: dados.people_vaccinated,
            pessoas_parcialmente_vacinadas: dados.people_partially_vaccinated,
        }
    }
}