import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberGeneratorService } from '../../../services/number-generator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-di-two-sibling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './di-two-sibling.component.html',
  styleUrl: './di-two-sibling.component.scss',
})
export class DiTwoSiblingComponent {
  private numberService = inject(NumberGeneratorService);
  siblingNumber?: Observable<number>;

  ngOnInit(): void {
    this.siblingNumber = this.numberService.randomNumber;
  }

  generateNumber() {
    this.numberService.generateNumber();
  }
}
