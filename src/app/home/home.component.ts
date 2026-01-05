import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../model/product';
import {CounterService} from '../service/counter.service';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ProductModalService} from '../product-modal.service';
import {details} from '../model/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products?: Product[] = [
    { name: 'Яблоко', kkal: 52, details: details.get('Яблоко')},
    { name: 'Банан', kkal: 89 },
    { name: 'Апельсин', kkal: 47 },
    { name: 'Клубника', kkal: 32 },
  ];
  form: FormGroup = this.createForm();
  selectedProduct: Product | null = null;
  weight = 0;
  selectedItems: { product: Product; weight: number }[] = [];
  totalCalories: number | null = null;
  modalRef: NgbModalRef;

  constructor(
    private counter: CounterService,
    private productModalService: ProductModalService) { }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return new FormGroup({
      product: new FormControl('', [Validators.required]),
      weight: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ])
    });
  }

  addProduct = () => {
    if (this.selectedProduct && this.weight > 0) {
      this.selectedItems.push({ product: this.selectedProduct, weight: this.weight });
      this.selectedProduct = null; // сбрасываем выбор продукта
      this.weight = 0; // сбрасываем вес
    }
  }

  calculateTotalCalories = () => {
    this.totalCalories = this.selectedItems.reduce((total, item) => {
      return total + (item.product.kkal * item.weight) / 100;
    }, 0);
  }

  openModalProduct = (name: string) => {
    const product = this.selectedItems.find(
      el => el.product.name === name).product;
    console.log(product.name);
    this.modalRef = this.productModalService.open();
    this.modalRef.componentInstance.product = product;
    this.modalRef.componentInstance.showDetails(product);
  }
}
