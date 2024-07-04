import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberGeneratorService } from '../../../services/number-generator.service';

@Component({
  selector: 'app-di-one-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './di-one-child.component.html',
  styleUrl: './di-one-child.component.scss',
})
export class DiOneChildComponent implements OnInit {
  private numberService = inject(NumberGeneratorService);
  childNumber?: Observable<number>;

  ngOnInit(): void {
    this.childNumber = this.numberService.randomNumber;
  }

  generateNumber() {
    this.numberService.generateNumber();
  }
}
