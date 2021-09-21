import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FetchService } from '../shared/fetch.service';
import { TeamsService } from './teams.service';
import { Team } from '../../models/teams';

describe('TeamsService', () => {
  let service: TeamsService;
  let mockFetchService = jasmine.createSpyObj("FetchService", ["postPatch", "getRemove"])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: FetchService, useValue: mockFetchService }
      ]
    });
    service = TestBed.inject(TeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call fetech server post on createTeam()', () => {
    const data: Team = { name: 'Test title' };
    service.createTeams(data);
    expect(mockFetchService.postPatch).toHaveBeenCalled();
    expect(mockFetchService.postPatch).toHaveBeenCalledWith('teams', data, 'post');
  });

  it('should call fetech server getRemove on getTeams()', () => {
    const data: Team = { name: 'Test title' };
    service.getTeams(data);
    expect(mockFetchService.getRemove).toHaveBeenCalled();
    expect(mockFetchService.getRemove).toHaveBeenCalledWith('teams', data, 'get');
  });

  it('should call fetech server getRemove on deleteTeams()', () => {
    service.deleteTeams('TestId');
    expect(mockFetchService.getRemove).toHaveBeenCalled();
    expect(mockFetchService.getRemove).toHaveBeenCalledWith('teams', 'TestId', 'delete');
  });
});
