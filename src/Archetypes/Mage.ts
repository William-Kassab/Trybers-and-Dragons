import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _count = 0;
  type_: EnergyType = 'mana';
  constructor(
    name: string,
  ) {
    super(name);
    Mage._count += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return Mage._count;
  }
}