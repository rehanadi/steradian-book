import React from 'react';
import type { Meta } from '@storybook/react';

import Button from '../../../app/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: "Components/Button/Example",
  component: Button,
};

export default meta;

export const Primary = (args: any) => <Button {...args}>Primary</Button>
Primary.args = {
  state: "primary"
}

export const Secondary = (args: any) => <Button {...args}>Secondary</Button>
Secondary.args = {
  state: "secondary"
}

export const Info = (args: any) => <Button {...args}>Info</Button>
Info.args = {
  state: "info"
}

export const Danger = (args: any) => <Button {...args}>Danger</Button>
Danger.args = {
  state: "danger"
}
