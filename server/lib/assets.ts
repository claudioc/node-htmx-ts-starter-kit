// Last 5 digits of the current timestamp are used to bust the cache
import { ASSETS_FOLDER, CACHE_BUSTER } from './constants.js';

export const cssFile = `/${ASSETS_FOLDER}/css/style.css?_=${CACHE_BUSTER}`;
export const jsFile = `/${ASSETS_FOLDER}/js/app.js?_=${CACHE_BUSTER}`;
