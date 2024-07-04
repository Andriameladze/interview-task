import { Component, OnInit, inject } from '@angular/core';
import { NumberGeneratorService } from '../../../services/number-generator.service';
import { DiOneChildComponent } from '../di-one-child/di-one-child.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-di-one-parent',
  standalone: true,
  imports: [CommonModule, DiOneChildComponent],
  templateUrl: './di-one-parent.component.html',
  styleUrl: './di-one-parent.component.scss',
})
export class DiOneParentComponent implements OnInit {
  private numberService = inject(NumberGeneratorService);
  parentNumber?: Observable<number>;

  ngOnInit(): void {
    this.parentNumber = this.numberService.randomNumber;
  }

  generateNumber() {
    this.numberService.generateNumber();
  }
}
