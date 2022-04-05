export interface Controller<T = any> {
    lidar: (requisicao: T) => Promise<any>
}