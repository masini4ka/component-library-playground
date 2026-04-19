import { BrandProvider, useBrand } from './providers/BrandProvider';
import { Button, type ButtonVariant, type ButtonSize } from './components/Button';
import { vars } from './tokens/theme.css';
import * as styles from './App.css';

const Icons = {
  ChevronDown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  Plus: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Settings: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  Search: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
};

const ThemeSwitcher = () => {
  const { brand, setBrand } = useBrand();

  return (
    <div className={styles.themeSwitcher}>
      <span className={styles.label}>Brand:</span>
      <Button variant={brand === 'corporate' ? 'primary' : 'ghost'} size="sm" onClick={() => setBrand('corporate')}>
        Corporate
      </Button>
      <Button variant={brand === 'playful' ? 'primary' : 'ghost'} size="sm" onClick={() => setBrand('playful')}>
        Playful
      </Button>
      <Button variant={brand === 'luxury' ? 'primary' : 'ghost'} size="sm" onClick={() => setBrand('luxury')}>
        Luxury
      </Button>
    </div>
  );
};

const ButtonWithIconShowcase = () => {
  const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>With Icons</h2>
      <div className={styles.buttonGroup}>
        {sizes.map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
            <span className={styles.sizeLabel}>{size}</span>
            <Button size={size} variant="primary">
              <Button.Icon><Icons.Plus /></Button.Icon>
              <Button.Text>Create</Button.Text>
            </Button>
            <Button size={size} variant="primary">
              <Button.Text>Submit</Button.Text>
              <Button.Icon><Icons.ChevronDown /></Button.Icon>
            </Button>
            <Button size={size} variant="primary">
              <Button.Icon><Icons.Settings /></Button.Icon>
            </Button>
            <Button size={size} variant="outline">
              <Button.Icon><Icons.Search /></Button.Icon>
              <Button.Text>Search</Button.Text>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

const Showcase = () => {
  const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost', 'destructive'];
  const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

  return (
    <div className={styles.showcase}>
      <h1 className={styles.title}>Button Component Showcase</h1>
      <p className={styles.subtitle}>Switch brands to see different styles</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Variants</h2>
        <div className={styles.buttonGroup}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sizes</h2>
        <div className={styles.buttonGroup}>
          {sizes.map((size) => (
            <Button key={size} size={size}>
              {size.toUpperCase()}
            </Button>
          ))}
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

      <ButtonWithIconShowcase />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>All Variants x All Sizes</h2>
        <div className={styles.grid}>
          {sizes.map((size) => (
            <div key={size} className={styles.gridRow}>
              <span className={styles.sizeLabel}>{size}</span>
              <div className={styles.buttonGroup}>
                {variants.map((variant) => (
                  <Button key={`${size}-${variant}`} size={size} variant={variant}>
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const App = () => {
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