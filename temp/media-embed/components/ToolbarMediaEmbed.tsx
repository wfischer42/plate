import { ToolbarButtonDelete } from '@/plugins/plate/media-embed/components/ToolbarButtonDelete';
import { ToolbarButtonEditUrl } from '@/plugins/plate/media-embed/components/ToolbarButtonEditUrl';
import { ToolbarButtonOpenUrl } from '@/plugins/plate/media-embed/components/ToolbarButtonOpenUrl';
import { ToolbarEmbed } from '@/plugins/plate/media-embed/components/ToolbarEmbed';
import { ToolbarEmbedInputEditUrl } from '@/plugins/plate/media-embed/components/ToolbarEmbedInputEditUrl';
import { useStore } from '@/store/rootStore';

/**
 * Toolbar for media embed block.
 * Buttons: edit url, open in new tab, delete.
 */
export const ToolbarMediaEmbed = () => {
  const isInputVisible = useStore().toolbar.isInputVisible();

  return (
    <ToolbarEmbed>
      {!isInputVisible ? (
        <>
          <ToolbarButtonEditUrl />
          <ToolbarButtonOpenUrl />
          <ToolbarButtonDelete />
        </>
      ) : (
        <ToolbarEmbedInputEditUrl />
      )}
    </ToolbarEmbed>
  );
};
