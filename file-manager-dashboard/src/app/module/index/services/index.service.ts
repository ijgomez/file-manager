import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { FileManagerServiceBase } from 'src/app/core/services/file-manager-service-base';
import { FileManagerService } from 'src/app/core/services/file-manager-service';
import { Index } from '../domain';
import { IndexCriteria } from '../domain/index-criteria';

@Injectable()
export class IndexService extends FileManagerServiceBase implements FileManagerService<Index, IndexCriteria> {

  constructor(http: Http) {
    super();
   }

  findByCriteria(criteria: IndexCriteria): Observable<Index[]> {
    throw new Error('Method not implemented.');
  }
  countByCriteria(criteria: IndexCriteria): Observable<number> {
    throw new Error('Method not implemented.');
  }
  create(object: Index): Observable<number> {
    throw new Error('Method not implemented.');
  }
  read(id: string | number): Observable<Index> {
    throw new Error('Method not implemented.');
  }
  update(object: Index): Observable<number> {
    throw new Error('Method not implemented.');
  }
  delete(object: Index): Observable<number> {
    throw new Error('Method not implemented.');
  }
  export(criteria: IndexCriteria): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
