// https://github.com/Microsoft/vscode/blob/master/src/vs/platform/commands/common/commands.ts

export class CommandsRegistry {

  _commands = new Map();

  registerCommand(id, commands) {
    this._commands.set(id, commands);
  }

  getCommand(id) {
    return this._commands.get(id);
  }
}