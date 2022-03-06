import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ContextQuery } from './core/context/state/context.query';
import { PersonsService } from './core/persons/state/persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'family-tree-akita';
  unsubscriber = new Subject<void>();

  @HostBinding('class.light-mode') lightMode: boolean = false;

  constructor(
    private contextQuery: ContextQuery,
    private personsService: PersonsService
  ) {}

  ngOnInit() {
    this.contextQuery.isDarkMode$
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((isDarkMode) => (this.lightMode = !isDarkMode));
  }

  ngOnDestroy() {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
