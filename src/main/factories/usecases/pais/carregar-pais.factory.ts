import { Provider } from "@nestjs/common";
import { RequestCarregarPais } from "src/data/usecases/requests";
import { CarregarPais } from "src/domain/usecases";
import { PaisRepository } from "src/infra/request/repositories";
import { CARREGAR_PAIS_FACTORY } from "../../providers";

export const carregarPaisFactory: Provider = {
    provide: CARREGAR_PAIS_FACTORY,
    useFactory: (paisRepository: PaisRepository): CarregarPais => {
        return new RequestCarregarPais(paisRepository)
    },
    inject: [PaisRepository]
}