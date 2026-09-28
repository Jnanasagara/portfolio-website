import { listDocuments, withSnapshot } from './client';
import { experience } from './snapshot';
import type { Experience } from './types';
const fields = ['company','role','location','start_date','end_date','description','achievements','technologies','display_order'];
export const getExperience = () => withSnapshot('experience', () => listDocuments<Experience>('Portfolio Experience', fields), experience);
