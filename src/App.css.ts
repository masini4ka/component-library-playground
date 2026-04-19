import { style } from '@vanilla-extract/css';
import { vars } from './tokens/theme.css';

export const main = style({
  minHeight: '100vh',
  padding: vars.spacing[8],
  fontFamily: vars.font.family.sans,
  backgroundColor: vars.color.background,
  color: vars.color.foreground,
});

export const themeSwitcher = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3],
  marginBottom: vars.spacing[8],
  padding: vars.spacing[4],
  backgroundColor: vars.color.muted,
  borderRadius: vars.radius.lg,
});

export const label = style({
  fontWeight: vars.font.weight.semibold,
  color: vars.color['muted-foreground'],
});

export const showcase = style({
  maxWidth: '900px',
  margin: '0 auto',
});

export const title = style({
  fontSize: vars.font.size['3xl'],
  fontWeight: vars.font.weight.bold,
  marginBottom: vars.spacing[2],
  fontFamily: vars.font.family.serif,
});

export const subtitle = style({
  fontSize: vars.font.size.lg,
  color: vars.color['muted-foreground'],
  marginBottom: vars.spacing[8],
});

export const section = style({
  marginBottom: vars.spacing[8],
});

export const sectionTitle = style({
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.semibold,
  marginBottom: vars.spacing[4],
  paddingBottom: vars.spacing[2],
  borderBottom: `1px solid ${vars.color.border}`,
});

export const buttonGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing[3],
  alignItems: 'center',
});

export const grid = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[4],
});

export const gridRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[4],
});

export const sizeLabel = style({
  width: '3rem',
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.color['muted-foreground'],
});
