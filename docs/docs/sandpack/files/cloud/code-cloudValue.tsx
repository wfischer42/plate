export const cloudValueCode = `/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@udecode/plate-test-utils';

jsx;

export const cloudValue: any = (
  <fragment>
    <hh2>Images and Attachments</hh2>
    <hh3>Try uploading now!</hh3>
    <hp>Drag or paste a file anywhere in this page to see it work.</hp>
    <hh3>Image Example</hh3>
    <hp>Click the image then drag the handle to resize.</hp>
    <element
      type="cloud_image"
      url="https://files.portive.com/f/demo/6hndj3bdag7eqbpb2794s--1920x1440.jpg"
      bytes={654196}
      width={320}
      height={240}
      maxWidth={1920}
      maxHeight={1440}
    >
      <htext />
    </element>
    <hh3>Attachment Example</hh3>
    <hp>Click the download button to view the attachment.</hp>
    <element
      type="cloud_attachment"
      url="https://gist.githubusercontent.com/prabansal/115387/raw/0e5911c791c03f2ffb9708d98cac70dd2c1bf0ba/HelloWorld.txt"
      filename="hello.txt"
      bytes={8}
    >
      <htext />
    </element>
  </fragment>
);
`;

export const cloudValueFile = {
  '/cloud/cloudValue.tsx': cloudValueCode,
};
