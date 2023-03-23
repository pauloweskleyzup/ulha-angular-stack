import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const BASE_URL = 'http://{{api_host}}:{{api_port}}/{{resource_name + 's'}}';

@Injectable({
  providedIn: 'root'
})
export class {{service_classname}} {

  constructor(private http: HttpClient) { }

  {{service_get_list}}(): Observable<any> {
    try {
      return this.http.get<any>(BASE_URL);
    } catch(error) {
      return of(new Error('Error loading list.'));
    }
  }

  {{service_get_item}}(id: any): Observable<any> {
    try {
      return this.http.get<any>(BASE_URL + '/' + id);
    } catch(error) {
      return of(new Error('Error loading selected item.'));
    }
  }

  {{service_save_item}}({{resource_camel}}: any): Observable<any> {
    try {
      return this.http.post<any>(BASE_URL, {{resource_camel}});
    } catch (error) {
      return of(new Error('Error creating selected item.'));
    }
  }

  {{service_edit_item}}({{resource_camel}}: any): Observable<any> {
    try {
      return this.http.patch<any>(BASE_URL + '/' + {{resource_camel + '.id'}}, {{resource_camel}});
    } catch (error) {
      return of(new Error('Error updating selected item.'));
    }
  }

  {{service_remove_item}}(id: any): Observable<any> {
    try {
      return this.http.delete<any>(BASE_URL + '/' + id);
    } catch (error) {
      return of(new Error('Error deleting selected item.'));
    }
  }
}
