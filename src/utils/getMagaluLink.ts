export function getMagaluLink(character: string): string {
  const formatCharacter = character.replace(/\s|-/g, '+');

  return `https://www.magazineluiza.com.br/busca/${formatCharacter}/?from=submit`;
}
