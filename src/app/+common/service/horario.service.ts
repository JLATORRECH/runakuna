import {Injectable} from "@angular/core";
import "rxjs/Rx";
import {Horario} from "../../+dto/maintenance/horario";
import {HorarioDia} from "../../+dto/maintenance/horarioDia";
import {NotificacionResult} from "../../+dto/notificacionResult";
import {HorarioFilter} from "../../+dto/horarioFilter";
import {BackendService} from "../../+rest/backend.service";
import {IUrlOptions, RequestTypes} from "../../+rest/backend.model";
import {ServiceBase} from "./serviceBase";

@Injectable()
export class HorarioService extends ServiceBase{

    private buscarHorariosUrl = '/api/horario/busquedaHorario';
    private obtenerHorarioDiaPorHorarioUrl = '/api/horario/obtenerHorarioDiaPorHorario';
    private obtenerHorarioUrl = '/api/horario/obtenerHorario';
    private registrarHorarioUrl = '/api/horario/registrarHorario';
    private eliminarHorarioUrl = '/api/horario/eliminarHorario';

    constructor(private backendService: BackendService) {
        super();
    }

    buscarHorarios(horarioFilter: HorarioFilter) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = this.buscarHorariosUrl;
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(horarioFilter))
            .map(res => <Horario[]> res)
            .catch(err=> this.backendService.handleError(err));
    }

    obtenerHorarioDiaPorHorario(idHorario: number) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = this.obtenerHorarioDiaPorHorarioUrl;
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(idHorario))
            .map(res => <HorarioDia[]> res)
            .catch(err=> this.backendService.handleError(err));

    }

    obtenerHorario(idHorario: number) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = this.obtenerHorarioUrl;
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(idHorario))
            .map(res => <Horario> res)
            .catch(err=> this.backendService.handleError(err));

    }

    registrarHorario(horario: Horario) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = this.registrarHorarioUrl;
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(horario))
            .map(res => <NotificacionResult> res)
            .catch(err=> this.backendService.handleError(err));

    }

    eliminarHorario(idHorario: number) {

        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = this.eliminarHorarioUrl;
        return this.backendService.AuthRequest(RequestTypes.post, urlOptions,JSON.stringify(idHorario))
            .map(res => <NotificacionResult> res)
            .catch(err=> this.backendService.handleError(err));

    }

}