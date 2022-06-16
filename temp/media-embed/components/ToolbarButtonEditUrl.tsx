import { ToolbarButton } from '@/plugins/plate/media-embed/components/ToolbarButton';
import { actions } from '@/store/rootStore';

export const ToolbarButtonEditUrl = () => {
  return (
    <ToolbarButton
      iconProps={{
        iconName: 'Link',
      }}
      onClick={() => {
        actions.toolbar.isInputVisible(true);
      }}
    />
  );
};
