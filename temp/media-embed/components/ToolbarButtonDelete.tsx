import { useEffect } from 'react';
import { useHover } from 'react-use';
import { unsetNodes } from '@udecode/plate-headless';
import { ToolbarButton } from '@/plugins/plate/media-embed/components/ToolbarButton';
import { actions } from '@/store/rootStore';
import { defaultTheme } from '@/themes';
import { useMyEditorRef } from '@udemus/core/types/utils-types';
import { MyBlock } from '@udemus/core/types/editor-types';

/**
 * Toolbar delete button to delete the block.
 */
export const DeleteButton = (isHovering: boolean) => {
  const editor = useMyEditorRef();

  return (
    <ToolbarButton
      styles={{
        root: {
          minWidth: 32,
        },
        icon: {
          color: isHovering
            ? `${defaultTheme.colors.themeError} !important`
            : undefined,
        },
      }}
      iconProps={{
        iconName: 'Delete',
      }}
      onClick={() => {
        unsetNodes<MyBlock>(editor, 'media');
      }}
    />
  );
};

export const ToolbarButtonDelete = () => {
  const [deleteButton, isHovering] = useHover(DeleteButton);

  useEffect(() => {
    actions.toolbar.isHoveringDelete(isHovering as boolean);
  }, [isHovering]);

  return deleteButton;
};
