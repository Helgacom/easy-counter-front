import {Component, OnInit, ViewChild} from '@angular/core';

import {IProduct, ProductModel} from '../model/product.model';
import {ProductService} from './product.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products?: IProduct[];
  displayedColumns: string[] = ['Id', 'name', 'caloriesPer100g', 'protein', 'fat', 'carb', 'description', 'edit'];
  dataSource = new MatTableDataSource<ProductModel>();
  showList = false;
  refreshInterval: any;
  subscription: Subscription = new Subscription();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(protected productService: ProductService,
              private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.productService.getProducts().subscribe(list => this.products = list);
  }

  onEdit(id: number): void {
    this.router.navigate(['/products', id, 'edit']);
  }

  onDelete(id: number): void {
    if (!confirm('Удалить продукт?')) {
      return;
    }
    this.productService.delete(id).subscribe(() => this.load());
  }

  onCreate(): void {
    this.router.navigate(['/products', 'new']).then(r => console.log('navigated - ' + r));
  }

  applyFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleList = () => {
    this.showList = !this.showList;
    if (this.showList) {
      this.fetchProducts();
      this.startAutoRefresh();
    } else {
      this.stopAutoRefresh();
    }
  }

  fetchProducts = () => {
    const subscription = this.productService.getProducts().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.subscription.add(subscription);
  }

  private startAutoRefresh = () => {
    this.refreshInterval = setInterval(() => {
      this.fetchProducts();
    }, 5000);
  }

  private stopAutoRefresh = () => {
    clearInterval(this.refreshInterval);
    this.subscription.unsubscribe();
  }
}
