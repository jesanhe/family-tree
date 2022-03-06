import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PersonListComponent],
  imports: [CommonModule, RouterModule],
  exports: [PersonListComponent],
})
export class PersonListModule {}
