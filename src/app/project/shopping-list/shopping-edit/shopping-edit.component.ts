import { Ingredient } from '../ingredient.model';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Input() ingredient: Ingredient;
  @Output() addEvent = new EventEmitter<Ingredient>();
  @Output() deleteEvent = new EventEmitter<Ingredient>();
  @Output() clearEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const value = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.addEvent.emit(value);
  }

  onDelete() {
    this.deleteEvent.emit(this.ingredient);
  }

  onClear() {
    this.clearEvent.emit();
    this.ingredient = null;
  }

}
