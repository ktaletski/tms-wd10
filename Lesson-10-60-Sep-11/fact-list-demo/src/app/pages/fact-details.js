import { AppHeader, AppLayout } from '@/components';
import { FactDetails } from '@/features/fact-details';
import { mockDetailsMap } from '@/mockData';

export function FactDetailsPage({ id }) {
  const details = mockDetailsMap[id];

  if (!details) {
    return '';
  }

  return AppLayout({
    header: AppHeader({ title: 'Fact' }),
    content: FactDetails(details),
  });
}
