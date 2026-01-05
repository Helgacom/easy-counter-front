import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {HttpService} from '../service/http.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | null;

  constructor(
    private httpService: HttpService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  showDetails = (product: Product) => {
    if (!product.details || product.details === '') {
      this.httpService.getDetails(product.name).subscribe(
        response => this.product.details = response
      );
    }
  }

  closeModalProduct = () => {
    this.modalService.dismissAll();
  }
}
