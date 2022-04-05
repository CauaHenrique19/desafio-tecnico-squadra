import { Provider } from "@nestjs/common";
import { AxiosAdapter } from "../adapters";
import { PAIS_REPOSITORY } from "../axios";

export const paisProvider: Provider = {
    provide: PAIS_REPOSITORY,
    useFactory: () => {
        return new AxiosAdapter()
    }
}