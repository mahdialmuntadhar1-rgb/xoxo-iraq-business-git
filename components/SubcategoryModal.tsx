
import React from 'react';
import type { Category, Subcategory } from '../types';
import { t } from '../constants';
import { X } from './icons';

interface SubcategoryModalProps {
  category: Category | null;
  onClose: () => void;
}

export const SubcategoryModal: React.FC<SubcategoryModalProps> = ({ category, onClose }) => {
  if (!category || !category.subcategories || category.subcategories.length === 0) {
    return null;
  }

  const handleSubcategoryClick = (cat: Category, sub: Subcategory) => {
    console.log("Selected:", cat.id, sub.id);
    onClose();
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl max-h-[90vh] overflow-auto p-4 md:p-8">
        <div className="backdrop-blur-2xl bg-dark-bg/90 border border-white/20 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(108,43,217,0.3)] transition-all duration-300 transform scale-95 opacity-0 animate-scale-in">
          <style>{`
            @keyframes scale-in {
              to {
                transform: scale(1);
                opacity: 1;
              }
            }
            .animate-scale-in {
              animation: scale-in 0.3s forwards;
            }
          `}</style>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">{category.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {t(category.nameKey)}
                </h3>
                <p className="text-white/60 text-sm">
                  {t('subcategories.selectOne')}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center transition-all duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {category.subcategories?.map((sub) => (
              <button
                key={sub.id}
                onClick={() => handleSubcategoryClick(category, sub)}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(108,43,217,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {sub.icon}
                </div>
                <h4 className="text-white font-medium text-sm text-center">
                  {t(sub.nameKey)}
                </h4>
                <p className="text-white/50 text-xs text-center mt-1">
                  {sub.count} {t('items')}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
