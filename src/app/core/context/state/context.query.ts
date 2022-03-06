import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ContextStore, ContextState } from './context.store';

@Injectable({ providedIn: 'root' })
export class ContextQuery extends Query<ContextState> {
  isDarkMode$ = this.select('isDarkMode');

  constructor(protected override store: ContextStore) {
    super(store);
  }
}
