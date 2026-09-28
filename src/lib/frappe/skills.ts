import { listDocuments, withSnapshot } from './client';
import { skills } from './snapshot';
const fields = ['skill_name','category','display_order'];
export const getSkills = () => withSnapshot('skills', async () => {
  const records = await listDocuments<{ skill_name: string; category: string; display_order: number }>('Portfolio Skill', fields);
  return records.map(({ skill_name, ...rest }) => ({ name: skill_name, ...rest }));
}, skills);
