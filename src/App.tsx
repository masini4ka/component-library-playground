import { type FC } from 'react';
import { BrandProvider, useBrand } from './providers/BrandProvider';
import { Button } from './components/Button';
import { vars } from './tokens/theme.css';
import * as styles from './App.css';

const ThemeSwitcher: FC = () => {
  const { brand, setBrand } = useBrand();

  return (
    <div className={styles.themeSwitcher}>
      <span className={styles.label}>Brand:</span>
      <Button
        variant={brand === 'corporate' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setBrand('corporate')}
      >
        Corporate
      </Button>
      <Button
        variant={brand === 'playful' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setBrand('playful')}
      >
        Playful
      </Button>
      <Button
        variant={brand === 'luxury' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setBrand('luxury')}
      >
        Luxury
      </Button>
    </div>
  );
};

const Showcase: FC = () => {
  return (
    <div className={styles.showcase}>
      <h1 className={styles.title}>Button Component Showcase</h1>
      <p className={styles.subtitle}>Switch brands to see different styles</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Variants</h2>
        <div className={styles.buttonGroup}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sizes</h2>
        <div className={styles.buttonGroup}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>States</h2>
        <div className={styles.buttonGroup}>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>All Variants x All Sizes</h2>
        <div className={styles.grid}>
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <div key={size} className={styles.gridRow}>
              <span className={styles.sizeLabel}>{size}</span>
              <div className={styles.buttonGroup}>
                <Button size={size} variant="primary">
                  Primary
                </Button>
                <Button size={size} variant="secondary">
                  Secondary
                </Button>
                <Button size={size} variant="outline">
                  Outline
                </Button>
                <Button size={size} variant="ghost">
                  Ghost
                </Button>
                <Button size={size} variant="destructive">
                  Destructive
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const App: FC = () => {
  return (
    <BrandProvider>
      <main
        className={styles.main}
        style={{
          backgroundColor: vars.color.background,
          color: vars.color.foreground,
        }}
      >
        <ThemeSwitcher />
        <Showcase />
      </main>
    </BrandProvider>
  );
};