import {expectType} from 'tsd';
import hashLengthRegex = require('.');

expectType<RegExp>(hashLengthRegex(128));
expectType<RegExp>(hashLengthRegex(256, {exact: true}));