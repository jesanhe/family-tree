import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { ContextQuery } from './context.query';
import { ContextStore } from './context.store';

@Injectable({ providedIn: 'root' })
export class ContextService {
  constructor(
    private contextStore: ContextStore,
    private contextQuery: ContextQuery
  ) {}

  swapMode() {
    this.contextQuery.isDarkMode$
      .pipe(take(1))
      .subscribe((isDarkMode) =>
        this.contextStore.update({ isDarkMode: !isDarkMode })
      );
  }
}
