import React from 'react';
import { Search, MessageSquare, BarChart, Mail, Edit, TrendingUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { Card, CardContent } from '@/components/ui/card';

const serviceIcons = {
  seo: Search,
  social: MessageSquare,
  analytics: BarChart,
  email: Mail,
  content: Edit,
  ppc: TrendingUp,
};

const serviceColors = {
  seo: 'from-blue-500 to-blue-600',
  social: 'from-purple-500 to-purple-600',
  analytics: 'from-emerald-500 to-emerald-600',
  email: 'from-pink-500 to-rose-500',
  content: 'from-indigo-500 to-purple-500',
  ppc: 'from-orange-500 to-red-500',
};

export function Services() {
  const { t } = useTranslation();

  const services = Object.keys(serviceIcons) as Array<keyof typeof serviceIcons>;

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            {t('services.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = serviceIcons[service];
            const colorClass = serviceColors[service];
            
            return (
              <Card
                key={service}
                className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0"
              >
                <CardContent className="p-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                    {t(`services.${service}.title`)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {t(`services.${service}.description`)}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                    <li>{t(`services.${service}.feature1`)}</li>
                    <li>{t(`services.${service}.feature2`)}</li>
                    <li>{t(`services.${service}.feature3`)}</li>
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
