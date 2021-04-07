import { call } from 'redux-saga/effects';
import { ResponseT } from '../../services/types';
import { alertError } from '../../util';

export function* callSafe<Fn extends (params: any) => Promise<any>, T>(fn: Fn, ...args: Parameters<Fn>) {
  try {
    const result: ResponseT<T> = yield call(fn, ...args);
    console.log(
      `🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------------------`,
    );
    console.log(`🛠 LOG: 🚀 --> ~ file: common.saga.ts ~ line 9 ~ function*callSafe<Fnextends ~ result`, result);
    console.log(
      `🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------------------`,
    );
    if (result.status === 200) {
      return result as ResponseT<T>;
    }
    throw result;
  } catch (error) {
    console.log(
      `🛠 LOG: 🚀 --> --------------------------------------------------------------------------------------------`,
    );
    console.log(`🛠 LOG: 🚀 --> ~ file: common.saga.ts ~ line 17 ~ function*callSafe<Fnextends ~ error`, error);
    console.log(
      `🛠 LOG: 🚀 --> --------------------------------------------------------------------------------------------`,
    );
    alertError(error.message);
    throw error;
  }
}
