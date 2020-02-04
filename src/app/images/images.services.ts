import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { globals } from '../config/globals';
import { Observable, Subscription } from 'rxjs';
import { Subject, throwError as observableThrowError } from 'rxjs';

@Injectable()
export class ImagesService {
    public serviceUrl: string = globals.dbhosturl;

    constructor(private http: HttpClient) { }

    getGalleryThumbnails(): Observable<any> {
        const result: Subject<any> = new Subject();

        this.http.get(this.serviceUrl + "getgallery")
            .subscribe(res => {
                result.next(res);
            }, err => {
                result.error(err);
            });
        return result;
    }

    getImagesByAlbumId(albumId): Observable<any> {
        const result: Subject<any> = new Subject();

        this.http.post(this.serviceUrl + "getalbumimages", albumId)
            .subscribe(res => {
                result.next(res);
            }, err => {
                result.error(err);
            });
        return result;
    }

}
