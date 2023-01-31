import { TSuggestion } from '@udecode/plate';
import { MyValue } from '../typescript/plateTypes';

export const usersData = {
  1: {
    id: '1',
    name: 'Foo',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1863771?v=4',
  },
  2: {
    id: '2',
    name: 'Bar',
  },
};

export const suggestionsData: Record<string, TSuggestion> = {
  1: {
    id: '1',
    userId: '1',
    value: [{ type: 'p', children: [{ text: 'paragraph' }] }],
    createdAt: 1663453625129,
  },
  2: {
    id: '2',
    userId: '1',
    value: [{ type: 'p', children: [{ text: 'What?' }] }],
    createdAt: 1663453729191,
  },
  3: {
    id: '3',
    userId: '1',
    value: [
      { type: 'p', children: [{ text: 'This is an accepted suggestion.' }] },
    ],
    isAccepted: true,
    createdAt: 1663453740180,
  },
};

export const suggestionValue: MyValue = [
  {
    type: 'p',
    children: [
      { text: 'A line of text in a ' },
      {
        text: 'paragraph',
        suggestion: true,
        suggestion_1: true,
      },
      { text: '.' },
    ],
  },
  {
    type: 'p',
    children: [
      {
        text: 'Lorem',
        suggestion: true,
        suggestion_2: true,
      },
      { text: 'amet' },
      {
        text: 'paragraph',
        suggestion: true,
        suggestion_3: true,
      },
      {
        text:
          ' consectetur, adipisicing elit. Nobis consequuntur modi odit incidunt unde animi molestias necessitatibus nisi ab optio dolorum, libero placeat aut, facere tempore accusamus veniam voluptatem aspernatur.',
      },
    ],
  },
  { type: 'p', children: [{ text: '' }] },
];
