import { HotkeyPlugin, onKeyDownToggleElement } from '@udecode/plate-common';
import { createPluginFactory } from '@udecode/plate-core';

export const ELEMENT_TODO_LI = 'action_item';

export const createTodoListPlugin = createPluginFactory<HotkeyPlugin>({
  key: ELEMENT_TODO_LI,
  isElement: true,
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
  options: {
    hotkey: ['mod+opt+4', 'mod+shift+4'],
  },
});
