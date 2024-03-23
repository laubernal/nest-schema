import { ID } from '../Vo/Id.vo';

export abstract class BaseEntity {
  protected constructor(
    private _id: ID,
    private _dateCreated?: Date,
    private _dateUpdated?: Date
  ) {}

  public id(): ID {
    return this._id;
  }

  public createdAt(): Date {
    return this._dateCreated ? this._dateCreated : new Date();
  }

  public updatedAt(): Date {
    return this._dateUpdated ? this._dateUpdated : new Date();
  }

  public entityUpdated(): void {
    this._dateUpdated = new Date();
  }
}
