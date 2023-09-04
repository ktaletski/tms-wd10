import { AppHeader, AppLayout } from '@/components';
import { List } from '@/features/fact-list';
import { mockList } from '@/mockData';

export function FactListPage() {
  return AppLayout({
    header: AppHeader({ title: 'Animals Facts' }),
    content: List({ items: mockList }),
  });
}
