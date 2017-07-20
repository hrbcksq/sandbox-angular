import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    Component,
    DoCheck,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { Server } from 'app/model/model.module';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DashboardItemComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
  @Input() item: Server;
  @Input() name: string;
  @ViewChild('name') nameElement: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('Name elemenet content: ' + this.nameElement.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck callled!');
  }

  ngAfterContentInit(): void {
    console.log('After content init called');
    console.log('Name elemenet content: ' + this.nameElement.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('After content checked called');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy called')
  }

  ngAfterViewInit(): void {
    console.log('After view init called');
    console.log('Name elemenet content: ' + this.nameElement.nativeElement.textContent);
  }
}

