import { createStyles } from '@udecode/plate-ui';
import { CSSProp } from 'styled-components';
import { MediaEmbedElementStyleProps } from '@/plugins/plate/media-embed/components/MediaEmbedElement.types';
import { defaultTheme } from '@/themes';

const classNames = {
  embedHover: 'slate-embed-hover',
};

export const getMediaEmbedElementStyles = (
  props: MediaEmbedElementStyleProps
) => {
  const { selected, isHoveringDelete, readOnly, visibleToolbar, provider } =
    props;

  let boxShadowColor: string | undefined;
  let boxShadowColorHover: string | undefined;

  if (!readOnly) {
    if (visibleToolbar) {
      if (!isHoveringDelete) {
        boxShadowColor = `0 0 0 2px white, 0 0 0 4px ${defaultTheme.colors.themePrimary}`;
      } else {
        boxShadowColor = `0 0 0 2px white, 0 0 0 4px ${defaultTheme.colors.themeError}`;
      }
    } else if (!selected) {
      boxShadowColorHover = `0 0 0 2px ${defaultTheme.colors.themeLight}`;
    }
  }

  const providersPadding = {
    youtube: '56.2061%',
    vimeo: '56.25%',
    youku: '56.25%',
    dailymotion: '56.0417%',
    coub: '51.25%',
  };
  const providerPadding: string =
    provider !== 'twitter'
      ? (provider && providersPadding[provider]) || '56.0417%'
      : undefined;

  const iframe: CSSProp = [
    classNames.embedHover,
    {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',

      boxShadow: boxShadowColor || undefined,
    },
  ];

  return createStyles(
    { prefixClassNames: 'MediaEmbedElement', ...props },
    {
      root: [
        {
          // Insert css properties
          position: 'relative',
          // selectors: {
          //   '.twitter-tweet': {
          //     margin: '0 auto !important',
          //     padding: 2,
          //     // borderRadius: '1px',
          //     boxShadow: boxShadowColor || undefined,
          //   },
          // },
        },
        // className,
      ],
      iframeWrapper: {
        position: 'relative',
        paddingBottom: providerPadding,

        height: provider !== 'twitter' ? 0 : undefined,
        minHeight: provider !== 'twitter' ? 100 : 375,
        selectors: {
          ':hover .slate-embed-hover, :hover .twitter-tweet': {
            boxShadow: boxShadowColorHover || undefined,
          },

          // iframe,
        },
      },
      iframe,
      toolbar: {
        padding: 5,
        background: 'white',
        boxShadow:
          'rgba(0, 0, 0, 0.133) 0px 6.4px 14.4px 0px, rgba(0, 0, 0, 0.11) 0px 1.2px 3.6px 0px',
        borderRadius: 2,
      },
    }
  );
};
