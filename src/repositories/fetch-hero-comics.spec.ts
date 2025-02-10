import { describe, expect, it, Mock, vi } from 'vitest';

import { api } from '@/lib/api';

import { makeFetchHeroComics } from './factories/make-fetch-hero-comics';
import { fetchHeroComics } from './fetch-hero-comics';

vi.mock('@/lib/api', () => ({
  api: {
    get: vi.fn(),
  },
}));

vi.mock('./factories/make-fetch-hero-comics', () => ({
  makeFetchHeroComics: vi.fn((data) => data.results || []),
}));

describe('fetchHeroComics function', () => {
  it('should fetch hero comics with correct parameters', async () => {
    const mockResponse = { data: { results: [{ id: 1, title: 'Comic 1' }] } };
    (api.get as Mock).mockImplementation(() => Promise.resolve(mockResponse));

    const comics = await fetchHeroComics({ heroId: '123', page: 1 });

    expect(api.get).toHaveBeenCalledWith('/characters/123/comics', {
      params: { limit: 6, offset: 6 },
    });
    expect(makeFetchHeroComics).toHaveBeenCalledWith(mockResponse.data);
    expect(comics).toEqual(mockResponse.data.results);
  });

  it('should fetch hero comics for the first page', async () => {
    const mockResponse = { data: { results: [{ id: 2, title: 'Comic 2' }] } };
    (api.get as Mock).mockResolvedValue(mockResponse);

    const comics = await fetchHeroComics({ heroId: '456', page: 0 });

    expect(api.get).toHaveBeenCalledWith('/characters/456/comics', {
      params: { limit: 6, offset: 0 },
    });
    expect(makeFetchHeroComics).toHaveBeenCalledWith(mockResponse.data);
    expect(comics).toEqual(mockResponse.data.results);
  });
});
