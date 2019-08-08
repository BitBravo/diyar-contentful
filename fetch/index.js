import { mainProcessor } from './main';
import {recordLog} from "../lib/emitter";

console.log('Generating markdown...');
mainProcessor('../dist/contexpo.json');

console.log('Fetch Action Logging now!');
recordLog('Fetched')

