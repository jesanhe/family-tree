import { DateTime } from 'luxon';

export interface Person {
  id: string;
  birthDate: DateTime;
  birthPlace: string;
  currentLocation: string;
  deathDate: DateTime;
  deathPlace: string;
  father: string;
  gender: gender;
  mother: string;
  name: string;
  spouses: string[];
  surname1: string;
  surname2: string;
}

type gender = 'F' | 'M' | '';

export function createPerson(params: Partial<Person>) {
  return { ...params } as Person;
}
