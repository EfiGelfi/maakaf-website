import { useTranslations } from 'next-intl';
import React from 'react';

export const MustIncludeMessage: React.FC = () => {
  const t = useTranslations('maintainers.maintainerForm');

  return <p className="text-error mt-2">{t('mustReadMessage')}</p>;
};
