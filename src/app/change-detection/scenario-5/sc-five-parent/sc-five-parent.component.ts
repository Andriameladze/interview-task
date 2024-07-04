import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScFiveChildComponent } from '../sc-five-child/sc-five-child.component';
import { Scenario5Service } from '../scenario-5.service';

@Component({
  selector: 'app-sc-five-parent',
  standalone: true,
  imports: [ScFiveChildComponent, CommonModule],
  templateUrl: './sc-five-parent.component.html',
  styleUrl: './sc-five-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFiveParentComponent implements OnInit {
  private scenarioFiveService = inject(Scenario5Service);
  private parentData = new BehaviorSubject('John from Parent');
  data$ = this.parentData.asObservable();

  serviceData$?: Observable<string>;

  ngOnInit(): void {
    this.serviceData$ = this.scenarioFiveService.userData$;
  }

  changeData() {
    this.parentData.next('George from Parent');
  }

  updateServiceData() {
    this.scenarioFiveService.setUserData();
  }
}
