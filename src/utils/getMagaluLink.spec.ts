import { faker } from '@faker-js/faker';
import { describe, expect, it } from 'vitest';

import { getMagaluLink } from './getMagaluLink';

describe('getMagaluLink function', () => {
  it('should return a valid link', () => {
    const character = faker.person.firstName();

    const result = getMagaluLink(character);

    expect(result).toBe(
      `https://www.magazineluiza.com.br/busca/${character.replace(/\s|-/g, '+')}/?from=submit`,
    );
  });
});
