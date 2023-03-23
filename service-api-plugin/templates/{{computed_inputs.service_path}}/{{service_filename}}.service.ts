import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const BASE_URL = "http://{{ api_host }}:{{ api_port }}/{{ resource_name + 's' }}";

@Injectable({
  providedIn: 'root'
})
export class {{ service_classname }} {

  constructor(private http: HttpClient) { }

  {{ get_list }}(): Observable<any> {
    try {
      return this.http.get<any>(BASE_URL);
    } catch(error) {
      return of(new Error('Error loading list.'));
    }
  }

  {{ get_item }}(id: any): Observable<any> {
    try {
      return this.http.get<any>(BASE_URL + '/' + id);
    } catch(error) {
      return of(new Error('Error loading selected item.'));
    }
  }

  {{ save_item }}({{ resouce_camel }}: any): Observable<any> {
    try {
      return this.http.post<any>(BASE_URL, {{ resouce_camel }});
    } catch (error) {
      return of(new Error('Error creating selected item.'));
    }
  }

  {{ edit_item }}({{ resouce_camel }}: any): Observable<any> {
    try {
      return this.http.patch<any>(BASE_URL + '/' + {{resouce_camel + '.id'}}, {{ resouce_camel }});
    } catch (error) {
      return of(new Error('Error updating selected item.'));
    }
  }

  {{ remove_item }}(id: any): Observable<any> {
    try {
      return this.http.delete<any>(BASE_URL + '/' + id);
    } catch (error) {
      return of(new Error('Error deleting selected item.'));
    }
  }
}
