import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _count = 0;
  type_: EnergyType = 'mana';
  constructor(
    name: string,
  ) {
    super(name);
    Necromancer._count += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._count;
  }
}