import { AppHeader, AppLayout } from '@/components';
import { List } from '@/features/fact-list';
import { mockList } from '@/mockData';

export function FactListPage({ loading = false } = {}) {
  const content = loading ? '<h3>loading...</h3>' : List({ items: mockList });

  return AppLayout({
    header: AppHeader({ title: 'Animals Facts' }),
    content,
  });
}
