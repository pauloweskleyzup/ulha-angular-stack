import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class {{service_classname_mock}} {

  {{service_get_list}}(): Observable<any> {
    return of(null);
  }

  {{service_get_item}}(id: any): Observable<any> {
    return of(null);
  }

  {{service_save_item}}({{resource_camel}}: any): Observable<any> {
      return of(null);
  }

  {{service_edit_item}}({{resource_camel}}: any): Observable<any> {
      return of(null);
  }

  {{service_remove_item}}(id: any): Observable<any> {
      return of(null);
  }
}
