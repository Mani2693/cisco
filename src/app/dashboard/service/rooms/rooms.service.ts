import { Injectable } from '@angular/core';
import { FetchService } from '../shared/fetch.service';
import { Room } from '../../models/rooms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private fetechSerice: FetchService) {}

  public createRooms(data:Room): Observable<any> {
   return this.fetechSerice.postPatch('rooms', data, 'post');
  }

  public getRooms(data?:Room): Observable<any> {
    return this.fetechSerice.getRemove('rooms', data, 'get');
  }

  public deleteRoom(id: string): Observable<any> {
    return this.fetechSerice.getRemove('rooms', id, 'delete');
  }
}
