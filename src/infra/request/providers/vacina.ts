import { Provider } from "@nestjs/common";
import { AxiosAdapter } from "../adapters";
import { VACINA_REPOSITORY } from "../axios";

export const vacinaProvider: Provider = {
    provide: VACINA_REPOSITORY,
    useFactory: () => {
        return new AxiosAdapter()
    }
}