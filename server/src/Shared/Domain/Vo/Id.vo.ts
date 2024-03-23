import { v4 as uuidV4, validate } from 'uuid';
import { ValueObject } from './ValueObject';

export class ID extends ValueObject {
  constructor(private _value: string) {
    super();

    if (this.validate(this._value)) {
      throw new Error('Incorrect ID format');
    }
  }

  public get value(): string {
    return this._value;
  }

  static generate(): ID {
    return new ID(uuidV4());
  }

  protected validate(value: string): boolean {
    return !validate(value);
  }
}
