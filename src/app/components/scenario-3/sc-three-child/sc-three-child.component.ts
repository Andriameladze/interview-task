import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sc-three-child',
  standalone: true,
  imports: [],
  templateUrl: './sc-three-child.component.html',
  styleUrl: './sc-three-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThreeChildComponent {}
