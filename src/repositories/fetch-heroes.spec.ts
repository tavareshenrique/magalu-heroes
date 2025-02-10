import { describe, expect, it, Mock, vi } from 'vitest';

import { api } from '@/lib/api';

import { makeFetchHeroes } from './factories/make-fetch-heroes';
import { fetchHeroes } from './fetch-heroes';

vi.mock('@/lib/api', () => ({
  api: {
    get: vi.fn(),
  },
}));

vi.mock('./factories/make-fetch-heroes', () => ({
  makeFetchHeroes: vi.fn((data) => data.results || []),
}));

describe('fetchHeroes function', () => {
  it('should fetch heroes with correct parameters', async () => {
    const mockResponse = { data: { results: [{ id: 1, name: 'Spider-Man' }] } };
    (api.get as Mock).mockResolvedValue(mockResponse);

    const heroes = await fetchHeroes({ page: 1, orderBy: 'name' });

    expect(api.get).toHaveBeenCalledWith('/characters', {
      params: { limit: 6, offset: 6, orderBy: 'name' },
    });
    expect(makeFetchHeroes).toHaveBeenCalledWith(mockResponse.data);
    expect(heroes).toEqual(mockResponse.data.results);
  });

  it('should include nameStartsWith when byName is provided', async () => {
    const mockResponse = { data: { results: [{ id: 1, name: 'Spider-Man' }] } };
    (api.get as Mock).mockResolvedValue(mockResponse);

    await fetchHeroes({ page: 0, orderBy: 'name', byName: 'Sp' });

    expect(api.get).toHaveBeenCalledWith('/characters', {
      params: { limit: 6, offset: 0, orderBy: 'name', nameStartsWith: 'Sp' },
    });
  });
});
