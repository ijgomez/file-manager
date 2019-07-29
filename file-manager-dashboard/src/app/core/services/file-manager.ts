import { Observable } from 'rxjs';

export interface FileManager<T, C> {

    findByCriteria(criteria: C): Observable<T[]>;

    countByCriteria(criteria: C): Observable<number>;

    create(trace: T): Observable<number>;

    read(id: number | string): Observable<T>;

    update(trace: T): Observable<number>;

    delete(trace: T): Observable<number>;

    export(criteria: C): Observable<any>;
}
