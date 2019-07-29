import { Observable } from 'rxjs';

export interface FileManager<T, C> {

    findByCriteria(criteria: C): Observable<T[]>;

    countByCriteria(criteria: C): Observable<number>;

    create(object: T): Observable<number>;

    read(id: number | string): Observable<T>;

    update(object: T): Observable<number>;

    delete(object: T): Observable<number>;

    export(criteria: C): Observable<any>;
}
