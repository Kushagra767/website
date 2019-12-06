import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from './button/button.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, NavbarModule],
})
export class UIModule {}
