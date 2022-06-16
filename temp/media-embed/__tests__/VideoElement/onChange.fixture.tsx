/** @jsx jsx */

import { jsx } from '@udecode/plate-test-utils';
import { MyEditor } from '@udemus/core/types/editor-types';

jsx;

export const input = (
  <editor>
    <hembed url="test" />
  </editor>
) as any as MyEditor;

export const output = (
  <editor>
    <hembed url="change">
      <cursor />
    </hembed>
  </editor>
) as any;
