import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special: number;
  private _cost: number;
  constructor(
    private _name: string,
  ) {
    this._cost = 0;
    this._special = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;

  get name() {
    return this._name;
  }

  get cost() {
    return this._name;
  }

  get special() {
    return this._name;
  }
}
