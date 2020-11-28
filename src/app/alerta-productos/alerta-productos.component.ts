import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta-productos',
  templateUrl: './alerta-productos.component.html',
  styleUrls: ['./alerta-productos.component.css']
})
export class AlertaProductosComponent implements OnInit {
  @Input() product;
  @Output() notifica = new EventEmitter();
  
  constructor() { }

  ngOnInit() {

  }

}