import { listDocuments, withSnapshot } from './client';
import { projects } from './snapshot';
import type { Project } from './types';
const fields = ['title','slug','short_description','description','year','status','technologies','github_url','live_url','featured','display_order','preview_image'];
export const getProjects = async () => {
  const records = await withSnapshot('projects', () => listDocuments<Project>('Portfolio Project', fields), projects);
  return records.map(project => ({
    ...project,
    live_url: project.live_url || projects.find(snapshot => snapshot.slug === project.slug)?.live_url,
  }));
};
export const getFeaturedProjects = async () => (await getProjects()).filter(project => Boolean(Number(project.featured)));
