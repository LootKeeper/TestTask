import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlainModel } from '../model/plain-model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

    _http: HttpClient
    _baseUrl: string;
    _headers: HttpHeaders;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._http = http;
        this._baseUrl = baseUrl;
        this._headers = this._createHeaders();
    }

    getEntity(id: number): Observable<PlainModel> {
        return this._http.get<PlainModel>(this._baseUrl + 'api/SampleData/model/' + id);
    }

    getEntities(): Observable<PlainModel[]> {
        return this._http.get<PlainModel[]>(this._baseUrl + 'api/SampleData/models');
    }

    createEntity(model: PlainModel): Observable<PlainModel> {
        return this._http.post<PlainModel>(this._baseUrl + 'api/SampleData/model', model, { headers: this._headers });
    }

    updateEntity(model: PlainModel): Observable<PlainModel> {
        let headers = this._createHeaders();
        return this._http.put<PlainModel>(this._baseUrl + 'api/SampleData/model', model, { headers: this._headers });
    }

    _createHeaders(): HttpHeaders {        
        let httpHeaders = new HttpHeaders();
        httpHeaders.append('Content-Type', 'application/json; charset=utf-8')
        return httpHeaders;
    }
}
