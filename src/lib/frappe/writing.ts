import { listDocuments, withSnapshot } from './client';
import { writing } from './snapshot';
import type { Writing } from './types';
const fields = ['title','slug','excerpt','content','published_date','tags','published','display_order'];
export const getWriting = () => withSnapshot('writing', () => listDocuments<Writing>('Portfolio Writing', fields, [['published', '=', 1]]), writing);
