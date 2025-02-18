// src/app/categories/[category]/generateMetadata.js (または同じディレクトリ内の任意のファイル名)
import { categories } from '@/data/questions';

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}