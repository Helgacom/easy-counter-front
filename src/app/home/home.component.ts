import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IProduct} from '../model/product.model';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ProductModalService} from '../product-modal.service';
import {ProductService} from '../product/product.service';
import {DropdownSettings} from 'angular2-multiselect-dropdown/lib/multiselect.interface';
import {DropDownSettingsModel} from '../model/drop-down-settings.model';
import {Item} from '../model/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: IProduct[] = [];
  selectedItems: Item[] = [];
  totalCalories: number | null = null;
  modalRef: NgbModalRef | null = null;

  productForm: FormGroup;

  dropDownSettingsProduct: DropdownSettings;

  isLoading = false;
  errorMsg: string | null = null;

  selectedProduct: IProduct | null = null;
  weight = 0;


  constructor(
    private productService: ProductService,
    private productModalService: ProductModalService
  ) {}

  ngOnInit(): void {
    this.productForm = this.createForm();
    this.loadAllProducts();
    this.initDropDownSettingsProducts();
  }

  createForm(): FormGroup {
    return new FormGroup({
      product: new FormControl(null, [Validators.required]),
      weight: new FormControl(0, [
        Validators.required,
        Validators.min(1)
      ])
    });
  }

  initDropDownSettingsProducts(): void {
    const settings = new DropDownSettingsModel();
    settings.singleSelection = true;
    settings.text = 'Выберите продукт';
    settings.searchPlaceholderText = 'Поиск';
    settings.enableSearchFilter = true;
    settings.labelKey = 'name';
    settings.primaryKey = 'id';
    settings.noDataLabel = 'Продукт не найден';
    settings.enableFilterSelectAll = false;
    settings.position = 'bottom';
    this.dropDownSettingsProduct = settings;
  }

  loadAllProducts(): void {
    this.isLoading = true;
    this.errorMsg = null;
    this.productService.getProducts()
      .subscribe({
        next: (products: IProduct[]) => {
          this.products = products;
          console.log('Получен список продуктов, всего: ', this.products.length);
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMsg = 'Ошибка загрузки продуктов. Попробуйте обновить страницу.';
          this.isLoading = false;
          console.error('Ошибка загрузки продуктов:', err);
        }
      });
  }

  addProduct(): void {
    this.productForm.patchValue({
      weight: this.weight
    });
    console.log(this.productForm);
    const item = new Item(this.selectedProduct, this.weight, true);
    this.selectedItems.push(item);
    console.log(this.selectedItems.length);
    this.selectedProduct = null;
    this.weight = null;
  }

  resetForm(): void {
    this.productForm.patchValue({
      product: null,
      weight: null
    });
  }

  calculateTotalCalories = () => {
    this.totalCalories = this.selectedItems.reduce((total, item) => {
      return total + (item.product.caloriesPer100g * item.weight) / 100;
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

  productDeselected(): void {
    console.log('Продукт удален из выбранных');
  }

  productSelected(event: IProduct): void {
    this.selectedProduct = event;
    this.productForm.patchValue({
      product: this.selectedProduct
    });
    console.log('Выбран продукт:', this.selectedProduct.name);
  }
}
