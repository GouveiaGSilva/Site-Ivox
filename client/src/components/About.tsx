import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
              {t('about.title')}
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-300">
              <p className="text-lg leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('about.paragraph2')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('about.paragraph3')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {t('about.stats.clients')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">250%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {t('about.stats.roi')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {t('about.stats.years')}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern office workspace with collaborative team environment"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
