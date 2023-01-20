import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { Hijo1Component } from './hijo1/hijo1.component';



@NgModule({
  declarations: [
    HomeComponent,
    Hijo1Component
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    Hijo1Component
  ]
})
export class PagesModule { }
