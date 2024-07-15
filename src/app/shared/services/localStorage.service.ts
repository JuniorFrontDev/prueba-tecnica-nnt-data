import { Injectable } from '@angular/core';
import { getInitialState, State } from 'src/app/store/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setState(state: State, localStorageKey: string): void {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  getState(localStorageKey: string): State {
    return JSON.parse(
      localStorage.getItem(localStorageKey) || JSON.stringify(getInitialState())
    );
  }

  clearAll(): void {
    localStorage.clear();
  }
}
