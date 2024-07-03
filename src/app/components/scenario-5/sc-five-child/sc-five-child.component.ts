import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sc-five-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sc-five-child.component.html',
  styleUrl: './sc-five-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFiveChildComponent {
  @Input() childData?: Observable<string>;

  updateChild() {
    this.childData = of('Nick from Child');
  }
}
