import { Injectable } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ProductDetailsComponent} from '../product-details/product-details.component';

@Injectable({
  providedIn: 'root'
})
export class ProductModalService {

  private isOpen = false;

  constructor(private modalService: NgbModal) { }

  open(): NgbModalRef {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    const modalRef = this.modalService.open(ProductDetailsComponent,
      {size: 'xl', backdrop: 'static', scrollable: true });
    modalRef.result.finally(() => (this.isOpen = false));
    return modalRef;
  }
}
