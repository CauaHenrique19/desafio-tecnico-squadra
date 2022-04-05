import { Controller } from "src/presentation/protocols";

export const controllerAdapter = async (controller: Controller, requisicao?: any): Promise<any> => {
  return controller.lidar(requisicao);
};