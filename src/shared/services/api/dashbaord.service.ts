import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";

export class DashboardService {
    constructor(private apiService:ApiService) { }

    getDashboardInfo() {
        return this.apiService.get('dashboardinfo').map(res => res);
    }
}