import { ELEMENT_MEDIA_EMBED, getPluginType } from '@udecode/plate-headless';
import { upsertNode } from '@/plugins/plate/image/transforms/upsertNode';
import { getEmbedUrl } from '@/plugins/plate/media-embed/utils/getEmbedUrl';
import { MyEditor } from '@udemus/core/types/editor-types';
import { MyMediaEmbedElement } from '@udemus/core/types/element-types';

export const insertEmbed = (
  editor: MyEditor,
  { url, providers }: { url: string; providers?: string[] }
) => {
  const type = getPluginType(
    editor,
    ELEMENT_MEDIA_EMBED
  ) as typeof ELEMENT_MEDIA_EMBED;

  const embedUrl = getEmbedUrl({ url, providers });

  const node: MyMediaEmbedElement = {
    type,
    url: embedUrl || url,
    children: [{ text: '' }],
  };
  upsertNode(editor, node);
};
