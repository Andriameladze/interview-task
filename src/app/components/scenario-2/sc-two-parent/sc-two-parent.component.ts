import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sc-two-parent',
  standalone: true,
  imports: [],
  templateUrl: './sc-two-parent.component.html',
  styleUrl: './sc-two-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTwoParentComponent {}
