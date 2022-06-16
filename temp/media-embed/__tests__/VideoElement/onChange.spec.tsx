import { fireEvent, render } from '@testing-library/react';
import { ELEMENT_MEDIA_EMBED } from '@udecode/plate-headless';
import * as SlateReact from 'slate-react';
import { ReactEditor } from 'slate-react';
import { MediaEmbedElement } from '@/plugins/plate/media-embed/components/MediaEmbedElement';
import {
  input,
  output,
} from '@/plugins/plate/media-embed/__tests__/VideoElement/onChange.fixture';

it('should render', () => {
  const editor = input;

  jest.spyOn(SlateReact, 'useEditor').mockReturnValue(editor as any);
  jest.spyOn(ReactEditor, 'findPath').mockReturnValue([0]);

  const view = render(
    <MediaEmbedElement
      editor={editor}
      data-testid="MediaEmbedUrlInput"
      attributes={{} as any}
      element={{
        type: ELEMENT_MEDIA_EMBED,
        url: 'test',
        children: [{ text: '' }],
      }}
    >
      test
    </MediaEmbedElement>
  );

  const element = view.getByTestId('MediaEmbedUrlInput');
  fireEvent.change(element, { target: { value: 'change' } });

  expect(editor.children).toEqual(output.children);
});
