"use strict";
import {IPackageJson} from "package-json-type";
import {ICLICommand} from "./types/cli-action";
import packageJsonFile = require("../../../package.json");

const version: string = (packageJsonFile as IPackageJson).version;

const cliCommand: ICLICommand = {
  name: "--version",
  run() {
    console.info(version);
  }
};

module.exports = cliCommand;
