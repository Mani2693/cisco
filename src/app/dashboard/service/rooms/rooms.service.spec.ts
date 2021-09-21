import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RoomsService } from './rooms.service';
import { FetchService } from '../shared/fetch.service';
import { Room } from '../../models/rooms';

describe('RoomsService', () => {
  let service: RoomsService;
  let mockFetchService = jasmine.createSpyObj("FetchService", ["postPatch", "getRemove"])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: FetchService, useValue: mockFetchService }
      ]
    });
    service = TestBed.inject(RoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call fetech server post on createRooms()', () => {
    const data: Room = { title: 'Test title' };
    service.createRooms(data);
    expect(mockFetchService.postPatch).toHaveBeenCalled();
    expect(mockFetchService.postPatch).toHaveBeenCalledWith('rooms', data, 'post');
  });

  it('should call fetech server getRemove on getRooms()', () => {
    const data: Room = { title: 'Test title' };
    service.getRooms(data);
    expect(mockFetchService.getRemove).toHaveBeenCalled();
    expect(mockFetchService.getRemove).toHaveBeenCalledWith('rooms', data, 'get');
  });

  it('should call fetech server getRemove on deleteRoom()', () => {
    service.deleteRoom('TestId');
    expect(mockFetchService.getRemove).toHaveBeenCalled();
    expect(mockFetchService.getRemove).toHaveBeenCalledWith('rooms', 'TestId', 'delete');
  });
});
