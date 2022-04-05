import { Provider } from "@nestjs/common";
import { CarregarVacinaRepository } from "src/data/protocols/request";
import { RequestCarregarVacina } from "src/data/usecases/requests";
import { VacinaRepository } from "src/infra/request/repositories";
import { CARREGAR_VACINA_FACTORY } from "../../providers";

export const carregarVacinaFactory: Provider = {
    provide: CARREGAR_VACINA_FACTORY,
    useFactory: (vacinaRepository: VacinaRepository): CarregarVacinaRepository => {
        return new RequestCarregarVacina(vacinaRepository)
    },
    inject: [VacinaRepository]
}