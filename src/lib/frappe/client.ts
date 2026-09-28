type FrappeResponse<T> = { data: T[] };

export async function listDocuments<T>(doctype: string, fields: string[], filters: unknown[][] = []): Promise<T[]> {
  const base = import.meta.env.FRAPPE_URL?.replace(/\/$/, '');
  if (!base) throw new Error('FRAPPE_URL is not set');
  const url = new URL(`${base}/api/resource/${encodeURIComponent(doctype)}`);
  url.searchParams.set('fields', JSON.stringify(fields));
  url.searchParams.set('filters', JSON.stringify(filters));
  url.searchParams.set('order_by', 'display_order asc');
  url.searchParams.set('limit_page_length', '100');
  const token = import.meta.env.FRAPPE_API_TOKEN;
  const response = await fetch(url, {
    headers: { Accept: 'application/json', ...(token ? { Authorization: `token ${token}` } : {}) },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`${doctype}: Frappe returned ${response.status}`);
  const body = await response.json() as FrappeResponse<T>;
  if (!Array.isArray(body.data)) throw new Error(`${doctype}: invalid Frappe response`);
  return body.data;
}

export async function withSnapshot<T>(label: string, load: () => Promise<T[]>, snapshot: T[]): Promise<T[]> {
  if (!import.meta.env.FRAPPE_URL) return snapshot;
  try { return await load(); }
  catch (error) {
    console.warn(`[portfolio] ${label} fetch failed; using checked-in snapshot.`, error);
    return snapshot;
  }
}
