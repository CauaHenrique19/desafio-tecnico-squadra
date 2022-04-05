import { Get } from "src/data/protocols";
import axios, { AxiosResponse } from "axios";

export class AxiosAdapter implements Get {
    async get(url: string): Promise<AxiosResponse> {
        const resultado = await axios.get(url)
        return resultado
    }
}