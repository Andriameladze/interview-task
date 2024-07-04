import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberGeneratorService } from '../../../services/number-generator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-di-three-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './di-three-child.component.html',
  styleUrl: './di-three-child.component.scss',
  providers: [NumberGeneratorService],
})
export class DiThreeChildComponent {
  private numberService = inject(NumberGeneratorService);
  childNumber?: Observable<number>;

  ngOnInit(): void {
    this.childNumber = this.numberService.randomNumber;
  }

  generateNumber() {
    this.numberService.generateNumber();
  }
}
