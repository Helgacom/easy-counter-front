import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../model/product.model';
import {HttpService} from '../service/http.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductModel | null;

  constructor(
    private httpService: HttpService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  showDetails = (product: ProductModel) => {
    if (!product.description || product.description === '') {
      this.httpService.getDetails(product.name).subscribe(
        response => this.product.description = response
      );
    }
  }

  closeModalProduct = () => {
    this.modalService.dismissAll();
  }
}
