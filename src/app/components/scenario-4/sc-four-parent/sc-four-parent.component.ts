import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sc-four-parent',
  standalone: true,
  imports: [],
  templateUrl: './sc-four-parent.component.html',
  styleUrl: './sc-four-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFourParentComponent {}
