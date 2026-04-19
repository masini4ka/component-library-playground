import type { ButtonHTMLAttributes } from 'react';
import type { ButtonVariant, ButtonSize } from './Button.css';
import * as styles from './Button.css';

export type { ButtonVariant, ButtonSize };

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  className,
  children,
  disabled,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) => {
  const classNames = [
    styles.variant[variant],
    styles.size[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <span className={styles.spinner} aria-hidden="true" />
          {children}
          <span className={styles.visuallyHidden}>Loading</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

const ButtonText = ({ children, className }: { children?: string; className?: string }) => (
  <span className={[styles.text, className].filter(Boolean).join(' ')}>{children}</span>
);

const ButtonIcon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={[styles.icon, className].filter(Boolean).join(' ')}>{children}</span>
);

Button.Text = ButtonText;
Button.Icon = ButtonIcon;