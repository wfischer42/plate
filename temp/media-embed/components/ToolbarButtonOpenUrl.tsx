import { isUrl } from '@udecode/plate-headless';
import { embedStore } from '@/plugins/plate/image/embed.store';
import { ToolbarButton } from '@/plugins/plate/media-embed/components/ToolbarButton';
import { MyMediaElement } from "@udemus/core/types/element-types";

export const ToolbarButtonOpenUrl = () => {
  // todo: provider
  const element: MyMediaElement = embedStore.use.element();

  if (!element || !isUrl(element.url)) return null;

  return (
    <ToolbarButton
      iconProps={{
        iconName: 'OpenInNewTab',
      }}
      onClick={() => {
        window.open(element.media?.url, '_blank');
      }}
    />
  );
};
