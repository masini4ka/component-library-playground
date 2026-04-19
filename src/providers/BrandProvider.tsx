import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

export const BRAND = {
  corporate: 'corporate',
  playful: 'playful',
  luxury: 'luxury',
} as const;

export type BrandId = typeof BRAND[keyof typeof BRAND];

interface BrandContextValue {
  brand: BrandId;
  setBrand: (brand: BrandId) => Promise<void>;
  isLoading: boolean;
}

const BrandContext = createContext<BrandContextValue | null>(null);

const loadedBrands = new Set<BrandId>();

const themeModules = {
  corporate: () => import('../themes/corporate.css'),
  playful: () => import('../themes/playful.css'),
  luxury: () => import('../themes/luxury.css'),
} as const;

async function loadBrandTheme(brand: BrandId): Promise<void> {
  if (loadedBrands.has(brand)) return;

  const loader = themeModules[brand];
  await loader();
  loadedBrands.add(brand);
}

export function BrandProvider({ children }: { children: ReactNode }) {
  const [brand, setBrandState] = useState<BrandId>('corporate');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initialBrand = (document.documentElement.dataset.brand as BrandId) || 'corporate';
    setBrandState(initialBrand);
    loadBrandTheme(initialBrand);
  }, []);

  const setBrand = useCallback(
    async (newBrand: BrandId) => {
      if (newBrand === brand || isLoading) return;

      setIsLoading(true);
      try {
        await loadBrandTheme(newBrand);
        document.documentElement.dataset.brand = newBrand;
        setBrandState(newBrand);
      } finally {
        setIsLoading(false);
      }
    },
    [brand, isLoading]
  );

  return (
    <BrandContext.Provider value={{ brand, setBrand, isLoading }}>{children}</BrandContext.Provider>
  );
}

export function useBrand(): BrandContextValue {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}