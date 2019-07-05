import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatIconModule,MatTabsModule ],
  exports: [ MatButtonModule, MatToolbarModule, MatIconModule,MatTabsModule ]
})
export class MaterialComponents { }