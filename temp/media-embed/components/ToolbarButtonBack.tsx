import { ToolbarButton } from '@/plugins/plate/media-embed/components/ToolbarButton';
import { actions } from '@/store/rootStore';

export const ToolbarButtonBack = () => {
  return (
    <ToolbarButton
      iconProps={{
        iconName: 'Back',
      }}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      onClick={() => actions.toolbar.removeToolbarInput()}
    />
  );
};
