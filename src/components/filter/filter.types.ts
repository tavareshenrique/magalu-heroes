import { z } from 'zod';

import { filterSchema } from './filter';

export type FilterValues = z.infer<typeof filterSchema>;
