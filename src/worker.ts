import {expose} from 'comlink';
import { runBigtask } from './utils';

const worker = {
    runBigtask
}

export type runBigTaskWorker = typeof worker;

expose(worker);