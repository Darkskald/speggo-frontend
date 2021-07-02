import {derived, writable} from 'svelte/store';
import {BackendConnector} from "./js_scripts/BackendConnector";
import {SfgSpectrum} from "./js_scripts/spectra";


export const currentSpecID = writable(1)

