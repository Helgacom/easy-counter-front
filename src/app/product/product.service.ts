import {URL_SERVER} from '../model/constants';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../model/product.model';
import {createRequestOption} from '../util/request-util';

type EntityResponseType = HttpResponse<IProduct>;
type EntityArrayResponseType = HttpResponse<IProduct[]>;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private allUrl: string = URL_SERVER + '/api/products';
  public resourceUrl = URL_SERVER + '/api/product';

  constructor(protected http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.allUrl);
  }

  create(product: IProduct): Observable<EntityResponseType> {
    return this.http.post<IProduct>(`${this.resourceUrl}/create`, product, { observe: 'response' });
  }

  update(product: IProduct): Observable<EntityResponseType> {
    return this.http.put<IProduct>(`${this.resourceUrl}/update`, product, { observe: 'response' });
  }

  updateArchived(req: any): Observable<HttpResponse<boolean>> {
    const options = createRequestOption(req);
    return this.http.get<boolean>(`${this.resourceUrl}/updateArchive`, { params: options, observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IProduct>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IProduct[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/delete/${id}`, { observe: 'response' });
  }
}
