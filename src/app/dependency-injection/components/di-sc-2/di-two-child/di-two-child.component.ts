import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberGeneratorService } from '../../../services/number-generator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-di-two-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './di-two-child.component.html',
  styleUrl: './di-two-child.component.scss',
})
export class DiTwoChildComponent implements OnInit {
  private numberService = inject(NumberGeneratorService);
  childNumber?: Observable<number>;

  ngOnInit(): void {
    this.childNumber = this.numberService.randomNumber;
  }

  generateNumber() {
    this.numberService.generateNumber();
  }
}
