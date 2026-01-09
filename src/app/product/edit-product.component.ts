import {ProductService} from './product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {IProduct} from '../model/product.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class ProductEditComponent implements OnInit {

  isLoading = false;

  editMode = false;
  product: IProduct = {};
  form: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.loadProduct(+id);
    } else {
      this.initForm();
    }
  }

  private loadProduct(id: number): void {
    this.isLoading = true;
    this.productService.find(id).subscribe({
      next: (response) => {
        this.product = response.body ?? {};
        this.initForm();
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Ошибка загрузки продукта:', err);
      }
    });
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this.product.name, [Validators.required, Validators.minLength(2)]),
      caloriesPer100g: new FormControl(this.product.caloriesPer100g, [Validators.min(0)]),
      protein: new FormControl(this.product.protein, [Validators.min(0)]),
      fat: new FormControl(this.product.fat, [Validators.min(0)]),
      carb: new FormControl(this.product.carb, [Validators.min(0)]),
      description: new FormControl(this.product.description)
    });
  }


  save(): void {
    if (this.form.invalid) {
      console.log('Ошибка валидации формы: ' + this.form);
      return;
    }

    this.isLoading = true;

    const productToSave: IProduct = {
      id: this.editMode ? this.product.id : null,
      name: this.form.get(['name']).value || '',
      caloriesPer100g: this.form.get(['caloriesPer100g'])?.value || 0,
      protein: this.form.get(['protein'])?.value,
      fat: this.form.get(['fat'])?.value,
      carb: this.form.get(['carb'])?.value,
      description: this.form.get(['description'])?.value
    };
    console.log(productToSave);
    console.log(this.form);

    const action = this.editMode
      ? this.productService.update(productToSave)
      : this.productService.create(productToSave);

    action.subscribe({
      next: (response) => {
        if (!this.editMode && response.body) {
          this.product = response.body;
        }
        console.log('Продукт сохранён: ' + this.product.name + '/' + this.product.caloriesPer100g);
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Ошибка сохранения:', err);
      },
      complete: () => this.isLoading = false
    });
  }


  clearForm(): void {
    console.log('Сброс формы пользователем');
    this.form.reset();
    this.product = {};
    this.initForm();
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
