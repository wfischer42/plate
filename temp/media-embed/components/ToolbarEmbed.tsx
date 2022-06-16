import clsx from 'clsx';
import styled from 'styled-components';
import { forwardRef } from 'react';

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.133) 0 6.4px 14.4px 0,
    rgba(0, 0, 0, 0.11) 0 1.2px 3.6px 0;
`;

/**
 * Toolbar for embedded blocks
 */
export const ToolbarEmbed = forwardRef(
  ({ children }: { children: any }, ref) => {
    return (
      <div
        ref={ref as any}
        contentEditable={false}
        onMouseDown={(event) => {
          event.preventDefault();
        }}
      >
        <Wrapper
          // ZINDEX
          // className={clsx('flex space-x-1 rounded-[2px] bg-white p-1', 'z-20')}
          className={clsx('flex space-x-1 rounded-[2px] bg-white p-1')}
        >
          {children}
        </Wrapper>
      </div>
    );
  }
);
