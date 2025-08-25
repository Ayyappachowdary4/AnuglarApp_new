import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from '../../custom-pipes/ordinal.pipe';
import { RomanPipe } from '../../custom-pipes/roman.pipe';
import { AgePipe } from '../../custom-pipes/age.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule, OrdinalPipe, RomanPipe, AgePipe],
  templateUrl: './pipes-demo.html',
  styleUrls: ['./pipes-demo.css']
})
export class PipesDemo {
  numbers = [21, 22, 23, 24];
  romanNumbers = [4, 8, 9, 2025];
  birthDates = ['2020-06-04', '1990-09-12', '2000-01-01'];
}
