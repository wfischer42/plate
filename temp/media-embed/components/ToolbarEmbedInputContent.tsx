import { useRef, useState } from 'react';
import { ISearchBoxProps, SearchBox } from '@fluentui/react';
import { useFocusWithin } from '@react-aria/interactions';
import { embedStore } from '@/plugins/plate/image/embed.store';
import { ToolbarButtonBack } from '@/plugins/plate/media-embed/components/ToolbarButtonBack';
import { actions } from '@/store/rootStore';
import { defaultTheme } from '@/themes';
import { setNodesMedia } from '@/plugins/plate/image/transforms/setNodesMedia';
import { useMyEditorRef } from '@udemus/core/types/utils-types';
import { MyMediaElement } from "@udemus/core/types/element-types";

/**
 * Toolbar with back button and input to edit url.
 */
export const ToolbarEmbedInputContent = ({
  validator,
  validatorAsync,
  searchProps,
  onSuccess,
}: {
  validator?: (value: any) => boolean;
  validatorAsync?: (value: any) => Promise<boolean>;
  searchProps?: ISearchBoxProps;
  onSuccess?: (value: any) => void;
}) => {
  const element: MyMediaElement = embedStore.use.element();

  const [errorInput, setErrorInput] = useState(false);
  const inputRef = useRef<any | null>(null);

  const editor = useMyEditorRef();

  const { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: (isFocusWithin) => {
      actions.toolbar.isInputFocused(isFocusWithin);
    },
  });

  const onSubmitEditInput = async (newValue: any) => {
    if (newValue === element?.media?.url) {
      actions.toolbar.removeToolbarInput();
      return;
    }

    let isValid = true;
    if (validatorAsync) {
      isValid = await validatorAsync(newValue);
    }
    if (isValid && validator) {
      isValid = validator(newValue);
    }

    if (isValid) {
      actions.toolbar.removeToolbarInput();

      if (onSuccess) {
        onSuccess(newValue);
      } else {
        setNodesMedia(editor, { url: newValue });
      }
    } else {
      setErrorInput(true);
    }
  };

  return (
    <>
      <ToolbarButtonBack />
      <SearchBox
        {...(focusWithinProps as any)}
        placeholder="Paste the embed link"
        autoFocus
        componentRef={inputRef}
        styles={{
          root: {
            width: 350,
            border: 'none',
            selectors: {
              '::after': {
                borderColor: errorInput
                  ? defaultTheme.colors.themeError
                  : undefined,
              },
            },
          },
          iconContainer: {
            display: 'none',
            // border: 'none',
          },
        }}
        iconProps={{ iconName: '' }}
        underlined
        onMouseDown={(event) => {
          event.preventDefault();
          inputRef.current?.focus();
        }}
        onChange={() => {
          if (errorInput) {
            setErrorInput(false);
          }
        }}
        onSearch={onSubmitEditInput}
        {...searchProps}
      />
    </>
  );
};
