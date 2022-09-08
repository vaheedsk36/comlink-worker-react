import {expose} from 'comlink';
import { runBigtask } from './utils';

const worker = {
    runBigtask
}

export type RunBigTaskWorker = typeof worker;

expose(worker);