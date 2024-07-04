import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberGeneratorService } from '../../../services/number-generator.service';
import { CommonModule } from '@angular/common';
import { DiThreeChildComponent } from '../di-three-child/di-three-child.component';

@Component({
  selector: 'app-di-three-parent',
  standalone: true,
  imports: [CommonModule, DiThreeChildComponent],
  templateUrl: './di-three-parent.component.html',
  styleUrl: './di-three-parent.component.scss',
  providers: [NumberGeneratorService],
})
export class DiThreeParentComponent {
  private numberService = inject(NumberGeneratorService);
  parentNumber?: Observable<number>;

  ngOnInit(): void {
    this.parentNumber = this.numberService.randomNumber;
  }

  generateNumber() {
    this.numberService.generateNumber();
  }
}
