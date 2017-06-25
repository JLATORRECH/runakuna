import {Injectable} from "@angular/core";
import {Http, Jsonp} from "@angular/http";
import "rxjs/Rx";

import 'rxjs/add/operator/toPromise';
import {HorarioEmpleado} from "../../+dto/maintenance/horarioEmpleado";
import {NotificacionResult} from "../../+dto/notificacionResult";
import {HorarioEmpleadoResult} from "../../+dto/horarioEmpleadoResult";
import {LocalStorageGlobal} from "../../+dto/localStorageDto";
import {BackendService} from "../../+rest/backend.service";
import {IUrlOptions, RequestTypes} from "../../+rest/backend.model";
import {ServiceBase} from "./serviceBase";

@Injectable()
export class HorarioEmpleadoService extends ServiceBase{

    localStorageValue: LocalStorageGlobal = new LocalStorageGlobal();

    constructor(private backendService: BackendService) {
        super();
    }

    obtenerBusquedaHorariosEmpleado(idEmpleado: number) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = '/api/horarioEmpleado/obtenerHorariosEmpleado';
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(idEmpleado)).map(res => <HorarioEmpleadoResult[]> res)
            .catch(err=> this.backendService.handleError(err));

    }

    verHorariosEmpleado(idEmpleado: number) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = '/api/horarioEmpleado/verHorariosEmpleado';
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(idEmpleado)).map(res => <HorarioEmpleado[]> res)
            .catch(err=> this.backendService.handleError(err));

    }

    registrarHorarioEmpleado(horarioEmpleado: HorarioEmpleado) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = '/api/horarioEmpleado/registrarHorarioEmpleado';
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(horarioEmpleado)).map(res => <NotificacionResult> res)
            .catch(err=> this.backendService.handleError(err));

    }

    obtenerHorarioEmpleadoDiaPorHorarioEmpleado(horarioEmpleado: HorarioEmpleado) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = '/api/horarioEmpleado/obtenerHorarioEmpleadoDiasPorHorarioEmpleado';
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(horarioEmpleado)).map(res => <NotificacionResult> res)
            .catch(err=> this.backendService.handleError(err));

    }

    obtenerHorarioEmpleado(idHorarioEmpleado: number) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = '/api/horarioEmpleado/obtenerHorarioEmpleado';
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(idHorarioEmpleado)).map(res => <HorarioEmpleado[]> res)
            .catch(err=> this.backendService.handleError(err));

    }

    eliminarHorarioEmpleado(idHorarioEmpleado: number) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = '/api/horarioEmpleado/eliminarHorarioEmpleado';
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(idHorarioEmpleado)).map(res => <NotificacionResult> res)
            .catch(err=> this.backendService.handleError(err));

    }


}