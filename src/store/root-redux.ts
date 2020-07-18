import { Dispatch } from 'react';
import { DispatchAction } from './root-reducer';

export class RootDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>;

  constructor(dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch;
  }
}
