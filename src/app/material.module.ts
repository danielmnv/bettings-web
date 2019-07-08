import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatIconModule,MatTabsModule, MatCardModule, MatExpansionModule, MatDialogModule, MatTooltipModule ],
  exports: [ MatButtonModule, MatToolbarModule, MatIconModule,MatTabsModule, MatCardModule, MatExpansionModule, MatDialogModule, MatTooltipModule ]
})
export class MaterialComponents { }