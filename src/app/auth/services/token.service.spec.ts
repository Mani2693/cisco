import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';


import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[]
    });
    service = TestBed.inject(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store token on userlogin()', ()=>{
    const storeTokenSpy = spyOn(service, 'storeTokens');
    const accessTokenSpy = spyOn(service, 'getAccessTokenOnlogin');
    service.doLoginUser('Test Token');
    expect(storeTokenSpy).toHaveBeenCalled();
    expect(accessTokenSpy).toHaveBeenCalled();
    expect(accessTokenSpy).toHaveBeenCalledWith('Test Token');
  })

  it('should call localstorage setItem', ()=>{
    const localStorageSpy = spyOn(localStorage, 'setItem');
    service.storeTokens('name','TestToken');
    expect(localStorageSpy).toHaveBeenCalled();
    expect(localStorageSpy).toHaveBeenCalledWith('name', 'TestToken');
  })

  it('should call localstorege getItem', ()=>{
    const localStorageSpy = spyOn(localStorage, 'getItem');
    service.getStoreToken('name');
    expect(localStorageSpy).toHaveBeenCalled();
    expect(localStorageSpy).toHaveBeenCalledWith('name');
  })


  it('should call localstorege clear on clearToken', async()=>{
    const localStorageSpy = spyOn(localStorage, 'clear');
    const response = await service.clearToken();
    expect(response).toBe(true);
    expect(localStorageSpy).toHaveBeenCalled();
  })
});
