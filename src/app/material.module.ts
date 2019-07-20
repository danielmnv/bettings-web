import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatIconModule,MatTabsModule, MatCardModule, MatExpansionModule, MatDialogModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule ],
  exports: [ MatButtonModule, MatToolbarModule, MatIconModule,MatTabsModule, MatCardModule, MatExpansionModule, MatDialogModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule ],
  providers: [ MatDatepickerModule ]
})
export class MaterialComponents { }