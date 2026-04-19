import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../tokens/theme.css';

export type ButtonVariant = keyof typeof variant;
export type ButtonSize = keyof typeof size;

const spinAnimation = keyframes({
  to: { transform: 'rotate(360deg)' },
});

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing[2],
  fontFamily: vars.font.family.sans,
  fontWeight: vars.font.weight.medium,
  borderRadius: vars.radius.md,
  transition: `background-color ${vars.transition.fast}, box-shadow ${vars.transition.fast}, transform ${vars.transition.fast}`,
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  ':focus-visible': {
    boxShadow: `0 0 0 2px ${vars.color.background}, 0 0 0 4px ${vars.color.primary}`,
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const variant = styleVariants({
  primary: [
    base,
    {
      backgroundColor: vars.color.primary,
      color: vars.color['primary-foreground'],
      ':hover': {
        filter: 'brightness(1.1)',
      },
      ':active': {
        filter: 'brightness(0.95)',
        transform: 'scale(0.98)',
      },
    },
  ],
  secondary: [
    base,
    {
      backgroundColor: vars.color.secondary,
      color: vars.color['secondary-foreground'],
      ':hover': {
        filter: 'brightness(1.1)',
      },
      ':active': {
        filter: 'brightness(0.95)',
        transform: 'scale(0.98)',
      },
    },
  ],
  ghost: [
    base,
    {
      backgroundColor: 'transparent',
      color: vars.color.foreground,
      ':hover': {
        backgroundColor: vars.color.muted,
      },
      ':active': {
        backgroundColor: vars.color.border,
        transform: 'scale(0.98)',
      },
    },
  ],
  destructive: [
    base,
    {
      backgroundColor: vars.color.destructive,
      color: vars.color['destructive-foreground'],
      ':hover': {
        filter: 'brightness(1.1)',
      },
      ':active': {
        filter: 'brightness(0.95)',
        transform: 'scale(0.98)',
      },
    },
  ],
  outline: [
    base,
    {
      backgroundColor: 'transparent',
      color: vars.color.foreground,
      border: `1px solid ${vars.color.border}`,
      ':hover': {
        backgroundColor: vars.color.muted,
      },
      ':active': {
        backgroundColor: vars.color.border,
        transform: 'scale(0.98)',
      },
    },
  ],
});

export const size = styleVariants({
  sm: {
    padding: `${vars.spacing[1]} ${vars.spacing[3]}`,
    fontSize: vars.font.size.sm,
    minHeight: '2rem',
  },
  md: {
    padding: `${vars.spacing[2]} ${vars.spacing[4]}`,
    fontSize: vars.font.size.base,
    minHeight: '2.5rem',
  },
  lg: {
    padding: `${vars.spacing[3]} ${vars.spacing[6]}`,
    fontSize: vars.font.size.lg,
    minHeight: '3rem',
  },
});

export const spinner = style({
  width: '1em',
  height: '1em',
  border: '2px solid currentColor',
  borderRightColor: 'transparent',
  borderRadius: '50%',
  animation: `${spinAnimation} 0.6s linear infinite`,
});

export const text = style({
  display: 'inline-flex',
  alignItems: 'center',
});

export const visuallyHidden = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: '0',
});

export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1em',
  height: '1em',
});

export const fullWidth = style({
  width: '100%',
});
