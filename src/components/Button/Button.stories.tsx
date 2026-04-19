import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

import '../../themes/corporate.css';
import '../../themes/playful.css';
import '../../themes/luxury.css';

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
};

export const WithIconLeft: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button variant="primary">
        <Button.Icon><PlusIcon /></Button.Icon>
        <Button.Text>Create New</Button.Text>
      </Button>
      <Button variant="secondary">
        <Button.Icon><PlusIcon /></Button.Icon>
        <Button.Text>Add Item</Button.Text>
      </Button>
      <Button variant="outline">
        <Button.Icon><PlusIcon /></Button.Icon>
        <Button.Text>Add More</Button.Text>
      </Button>
      <Button variant="ghost">
        <Button.Icon><PlusIcon /></Button.Icon>
        <Button.Text>Add</Button.Text>
      </Button>
    </div>
  ),
};

export const WithIconRight: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button variant="primary">
        <Button.Text>Submit</Button.Text>
        <Button.Icon><ChevronDownIcon /></Button.Icon>
      </Button>
      <Button variant="secondary">
        <Button.Text>Options</Button.Text>
        <Button.Icon><ChevronDownIcon /></Button.Icon>
      </Button>
      <Button variant="outline">
        <Button.Text>See More</Button.Text>
        <Button.Icon><ChevronDownIcon /></Button.Icon>
      </Button>
      <Button variant="ghost">
        <Button.Text>Expand</Button.Text>
        <Button.Icon><ChevronDownIcon /></Button.Icon>
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button variant="primary" aria-label="Add">
        <Button.Icon><PlusIcon /></Button.Icon>
      </Button>
      <Button variant="secondary" aria-label="Add">
        <Button.Icon><PlusIcon /></Button.Icon>
      </Button>
      <Button variant="outline" aria-label="Add">
        <Button.Icon><PlusIcon /></Button.Icon>
      </Button>
      <Button variant="ghost" aria-label="Add">
        <Button.Icon><PlusIcon /></Button.Icon>
      </Button>
      <Button variant="destructive" aria-label="Add">
        <Button.Icon><PlusIcon /></Button.Icon>
      </Button>
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button size="sm" variant="primary">Small</Button>
        <Button size="md" variant="primary">Medium</Button>
        <Button size="lg" variant="primary">Large</Button>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button variant="primary">
          <Button.Icon><PlusIcon /></Button.Icon>
          <Button.Text>With Icon Left</Button.Text>
        </Button>
        <Button variant="primary">
          <Button.Text>With Icon Right</Button.Text>
          <Button.Icon><ChevronDownIcon /></Button.Icon>
        </Button>
        <Button variant="primary">
          <Button.Icon><PlusIcon /></Button.Icon>
        </Button>
      </div>
    </div>
  ),
};