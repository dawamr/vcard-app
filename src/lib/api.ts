const API_BASE_URL = import.meta.env.PUBLIC_VCARD_API_URL ?? 'https://cmsvcard.solarion.id';

export type Employee = {
  id: string;
  status: string;
  date_created: string;
  date_updated: string;
  frist_name: string; // ejaan mengikuti API
  last_name: string;
  title: string;
  company: string;
  photo: string | null;
  company_address: string;
  email: string;
  whatsapp: string;
  company_gmaps: string | null;
  company_website: string | null;
  company_describ: string | null;
  qrcode: string | null;
  logo_company: string | null;
  slug: string;
};

export async function getEmployeeBySlug(slug: string): Promise<Employee | null> {
  const url = new URL('/items/trisip_employees', API_BASE_URL);
  url.searchParams.set('filter[slug][_eq]', slug);

  const res = await fetch(url.toString());

  if (!res.ok) {
    console.error('Failed to fetch employee', res.status, res.statusText);
    return null;
  }

  const json = (await res.json()) as { data?: Employee[] };
  const item = json.data?.[0] ?? null;
  return item ?? null;
}
