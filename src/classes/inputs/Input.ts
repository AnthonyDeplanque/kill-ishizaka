import { InputType } from "../types/Inputs";

export abstract class Input {
  protected input?: InputType;

  public getInput(): string {
    return this.input!;
  }
}
