interface CategoriesColors {
  [key: string]: string;
}

type AppColors = 'success' | 'error' | 'info' | 'warning';

export function getCategoryColor(category: string): AppColors {
  const categoriesColors: CategoriesColors = {
    menclothing: 'info',
    jewelery: 'success',
    electronics: 'warning',
    womenclothing: 'error',
  };

  const color = categoriesColors[category.replace(' ', '')] as AppColors;

  return color;
}
