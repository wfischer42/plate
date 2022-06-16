import { CommandBarButton, IButtonProps } from '@fluentui/react';

/**
 * Toolbar button
 */
export const ToolbarButton = (props: IButtonProps) => (
  <div style={{ height: 32, width: 32 }}>
    <CommandBarButton
      styles={{
        root: {
          minWidth: 32,
        },
      }}
      {...props}
    />
  </div>
);
