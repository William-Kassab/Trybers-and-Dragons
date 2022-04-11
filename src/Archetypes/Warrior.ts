import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _count = 0;
  type_: EnergyType = 'stamina';
  constructor(
    name: string,
  ) {
    super(name);
    Warrior._count += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return Warrior._count;
  }
}