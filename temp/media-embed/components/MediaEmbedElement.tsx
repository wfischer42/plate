import { useMemo } from 'react';
import { Tweet } from 'react-twitter-widgets';
import { useEffectElement } from '@/plugins/plate/image/embed.store';
import { MediaEmbedElementProps } from '@/plugins/plate/media-embed/components/MediaEmbedElement.types';
import { TippyEmbed } from '@/plugins/plate/media-embed/components/TippyEmbed';
import { ToolbarMediaEmbed } from '@/plugins/plate/media-embed/components/ToolbarMediaEmbed';
import {
  getEmbedId,
  getEmbedProvider,
} from '@/plugins/plate/media-embed/utils/getEmbedUrlData';
import { useEffectToolbarVisible } from '@/plugins/toolbar/useEffectToolbarVisible';
import { Draggable } from '@/plugins/plate/components/blocks/Draggable';

/**
 * MediaEmbedElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const MediaEmbedElement = ({
  attributes,
  children,
  element,
}: MediaEmbedElementProps) => {
  // const selected = useSelected();
  // const readOnly = useReadOnly();
  // const isToolbarVisible = useStore().toolbar.isToolbarVisible();
  // const isHoveringDelete = useStore().toolbar.isHoveringDelete();

  const { url } = element;

  const embedId = useMemo(() => getEmbedId(url), [url]);
  const embedProvider = useMemo(() => getEmbedProvider(url), [url]);

  useEffectToolbarVisible();

  // const classNames = getClassNames(styles, {
  //   className,
  //   // Other style props
  //   selected,
  //   readOnly,
  //   visibleToolbar: isToolbarVisible,
  //   isHoveringDelete,
  //   provider: embedProvider,
  // });

  useEffectElement(element);

  return (
    <div
      {...attributes}
      // className={classNames.root}
    >
      <div contentEditable={false}>
        <Draggable element={element as any}>
          <TippyEmbed content={<ToolbarMediaEmbed />}>
            <div
            // className={classNames.iframeWrapper}
            >
              {embedProvider === 'twitter' && embedId ? (
                <Tweet tweetId={embedId} />
              ) : (
                <iframe
                  // className={classNames.iframe}
                  title="embed"
                  src={url}
                  frameBorder="0"
                  sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
                  allowFullScreen
                  // loading="lazy"
                />
              )}
            </div>
          </TippyEmbed>
        </Draggable>
        {/* <MediaEmbedUrlInput */}
        {/*  data-testid="MediaEmbedUrlInput" */}
        {/*  className={classNames.input} */}
        {/*  url={url} */}
        {/*  onChange={(val: string) => { */}
        {/*    const path = findNodePath(editor, element); */}
        {/*    setNodes(editor, { url: val }, { at: path }); */}
        {/*  }} */}
        {/* /> */}
      </div>
      {children}
    </div>
  );
};
