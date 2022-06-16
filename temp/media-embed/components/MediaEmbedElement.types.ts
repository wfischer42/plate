import { CSSProp } from 'styled-components';
import { MyStyledElementProps } from '@/plugins/plate/plate.types';
import { MyMediaEmbedElement } from "@udemus/core/types/element-types";

export interface MediaEmbedElementStyleProps {
  selected?: boolean;
  isHoveringDelete?: boolean;
  readOnly?: boolean;
  visibleToolbar?: boolean;
  provider?: string;
}

export interface MediaEmbedElementStyles {
  iframeWrapper?: CSSProp;
  iframe?: CSSProp;
  toolbar?: CSSProp;
}

export type MediaEmbedElementProps = MyStyledElementProps<
  MyMediaEmbedElement,
  MediaEmbedElementStyles
> & {
  draggable?: boolean;
};
