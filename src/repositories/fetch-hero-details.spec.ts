import { describe, expect, it, Mock, vi } from 'vitest';

import { api } from '@/lib/api';

import { makeFetchHeroDetails } from './factories/make-fetch-hero-details';
import { fetchHeroDetails } from './fetch-hero-details';

vi.mock('@/lib/api', () => ({
  api: {
    get: vi.fn(),
  },
}));

vi.mock('./factories/make-fetch-hero-details', () => ({
  makeFetchHeroDetails: vi.fn((data) => data.results || []),
}));

describe('fetchHeroDetails function', () => {
  it('should fetch hero details with correct parameters', async () => {
    const mockResponse = {
      data: {
        results: [
          { id: 1, name: 'Spider-Man', description: 'A hero from Marvel' },
        ],
      },
    };
    (api.get as Mock).mockResolvedValue(mockResponse);

    const hero = await fetchHeroDetails({ heroId: '1' });

    expect(api.get).toHaveBeenCalledWith('/characters/1', {});
    expect(makeFetchHeroDetails).toHaveBeenCalledWith(mockResponse.data);
    expect(hero).toEqual(mockResponse.data.results);
  });
});
