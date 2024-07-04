import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Scenario5Service } from '../scenario-5.service';

@Component({
  selector: 'app-sc-five-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sc-five-child.component.html',
  styleUrl: './sc-five-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFiveChildComponent implements OnInit {
  private scenarioFiveService = inject(Scenario5Service);
  @Input() childData?: Observable<string>;
  serviceData$?: Observable<string>;

  ngOnInit(): void {
    this.serviceData$ = this.scenarioFiveService.userData$;
  }

  updateChild() {
    this.childData = of('Nick from Child');
  }

  updateServiceData() {
    this.scenarioFiveService.setUserData();
  }
}
