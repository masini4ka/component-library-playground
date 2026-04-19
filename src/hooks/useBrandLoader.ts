import type { BrandId } from '../providers/BrandProvider';

const brandLoaders: Record<BrandId, () => Promise<unknown>> = {
  corporate: () => import('../themes/corporate.css'),
  playful: () => import('../themes/playful.css'),
  luxury: () => import('../themes/luxury.css'),
};

const loadedBrands = new Set<BrandId>();
let observerInitialized = false;

export function initBrandLoader() {
  const html = document.documentElement;
  const currentBrand = html.dataset.brand as BrandId;

  const loadBrand = async (brand: BrandId) => {
    if (!brand || loadedBrands.has(brand)) return;
    
    try {
      loadedBrands.add(brand);
      await brandLoaders[brand]();
    } catch (error) {
      console.error(`Failed to load brand theme: ${brand}`, error);
      loadedBrands.delete(brand);
    }
  };

  // Load initial brand
  if (currentBrand && brandLoaders[currentBrand]) {
    loadBrand(currentBrand);
  }

  // Watch for data-brand attribute changes
  if (!observerInitialized) {
    observerInitialized = true;
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-brand'
        ) {
          const newBrand = html.dataset.brand as BrandId;
          if (newBrand && brandLoaders[newBrand]) {
            loadBrand(newBrand);
          }
        }
      }
    });

    observer.observe(html, { attributes: true, subtree: false });
  }
}