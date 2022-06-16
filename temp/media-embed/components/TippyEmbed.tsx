import Tippy, { TippyProps } from '@tippyjs/react';
import { useStore } from '@/store/rootStore';

// TODO: singleton
export const TippyEmbed = ({
  content,
  children,
}: {
  content: any;
  children: any;
}) => {
  const isToolbarVisible = useStore().toolbar.isToolbarVisible();

  const tooltipProps: TippyProps = {
    content,
    placement: 'bottom',
    animation: '',
    arrow: false,
    offset: [0, 12],
    delay: [0, 0],
    duration: [0, 0],
    interactive: true,
    trigger: 'click',
    visible: isToolbarVisible,
    theme: 'custom',
    // ZINDEX
    // className: 'z-20',
  };

  return <Tippy {...tooltipProps}>{children}</Tippy>;
};
