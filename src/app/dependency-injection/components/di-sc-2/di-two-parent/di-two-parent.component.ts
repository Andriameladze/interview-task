import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberGeneratorService } from '../../../services/number-generator.service';
import { DiTwoChildComponent } from '../di-two-child/di-two-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-di-two-parent',
  standalone: true,
  imports: [CommonModule, DiTwoChildComponent],
  templateUrl: './di-two-parent.component.html',
  styleUrl: './di-two-parent.component.scss',
  providers: [NumberGeneratorService],
})
export class DiTwoParentComponent implements OnInit {
  private numberService = inject(NumberGeneratorService);
  parentNumber?: Observable<number>;

  ngOnInit(): void {
    this.parentNumber = this.numberService.randomNumber;
  }

  generateNumber() {
    this.numberService.generateNumber();
  }
}
