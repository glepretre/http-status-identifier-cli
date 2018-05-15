#!/usr/bin/env node

import program from 'commander';

import pkg from '../package.json';
import identifyStatuses from './identifyStatuses';

program.version(pkg.version)
  .option('-f, --fullInformation', 'Supply full information')
  .option('-d, --documentation', 'Open documentation in browser')
  .arguments('[statusIdentifiers...]')
  // eslint-disable-next-line max-len
  .action(statusIdentifiers => identifyStatuses({
    statusIdentifiers,
    options: { fullInformation: program.fullInformation, openDocumentation: program.documentation }
  }))
  .parse(process.argv);
