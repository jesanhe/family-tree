import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ContextState {
  isDarkMode: boolean;
}

export function createInitialState(): ContextState {
  return {
    isDarkMode: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'context' })
export class ContextStore extends Store<ContextState> {
  constructor() {
    super(createInitialState());
  }
}
