import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDataStoreModule } from './app-data-store/app-data-store.module';

/**
 * dependencies
 */
const dependencies: Array<Type<any>> = [
  AppDataStoreModule,
];

/**
 * CoreModule
 */
@NgModule({
  imports: [
    CommonModule,
    ...dependencies,
  ],
  exports: [
    ...dependencies,
  ],
  declarations: []
})
export class CoreModule { }
