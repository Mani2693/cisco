import { Injectable } from '@angular/core';
import { FetchService } from '../shared/fetch.service';
import { Team } from '../../models/teams';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private fetechSerice: FetchService) { }

  public createTeams(data:Team): Observable<any> {
    return this.fetechSerice.postPatch('teams', data, 'post');
  }

  public getTeams(data?:Team): Observable<any> {
    return this.fetechSerice.getRemove('teams', data, 'get');
  }

  public deleteTeams(id: string): Observable<any> {
    return this.fetechSerice.getRemove('teams', id, 'delete');
  }
}
