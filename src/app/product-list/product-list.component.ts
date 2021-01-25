import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from '../products';
import { faFacebookF, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  items;
  product;

  faFacebookF = faFacebookF;
  faTwitterSquare = faTwitterSquare;
  faInstagram = faInstagram;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
