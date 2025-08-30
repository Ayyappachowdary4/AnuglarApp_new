import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product, ProductService } from '../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;

  
  productForm: Product = { title: '', category: '', price: 0, image: '' };
  isEditMode = false;


  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.isLoading = false;
    });
  }

  saveProduct() {
    if (this.isEditMode && this.productForm.id) {
      this.productService.updateProduct(this.productForm).subscribe(() => {
        this.fetchProducts();
        this.resetForm();
      });
    } else {
      this.productService.addProduct(this.productForm).subscribe((created) => {
        this.products.push(created);
        this.resetForm();
      });
    }
  }

  editProduct(product: Product) {
    this.productForm = { ...product };
    this.isEditMode = true;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }

  resetForm() {
    this.productForm = { title: '', category: '', price: 0, image: '' };
    this.isEditMode = false;
  }

  viewDetails(product: Product) {
    this.selectedProduct = product;
  }

  closeDetails() {
    this.selectedProduct = null;
  }
}
