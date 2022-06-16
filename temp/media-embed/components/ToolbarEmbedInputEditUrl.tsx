import { isUrl, setNodes } from '@udecode/plate-headless';
import { ToolbarEmbedInputContent } from '@/plugins/plate/media-embed/components/ToolbarEmbedInputContent';
import { getEmbedUrl } from '@/plugins/plate/media-embed/utils/getEmbedUrl';
import { useMyEditorRef } from '@udemus/core/types/utils-types';
import { MyMediaEmbedElement } from "@udemus/core/types/element-types";

export const ToolbarEmbedInputEditUrl = () => {
  const editor = useMyEditorRef();

  const validator = (value: any) => {
    return isUrl(value);
  };

  const onSuccess = (url: string) => {
    const embedSrc = getEmbedUrl({ url });

    setNodes<MyMediaEmbedElement>(editor, {
      url: embedSrc || url,
    });
  };

  return (
    <ToolbarEmbedInputContent
      validator={validator}
      onSuccess={onSuccess}
      searchProps={
        {
          // onSearch: onSubmitEditInput,
          // placeholder: 'Paste the image link',
        }
      }
    />
  );
};

// name: 'spotify',
//   url: [
//   /^open\.spotify\.com\/(artist\/\w+)/,
//   /^open\.spotify\.com\/(album\/\w+)/,
//   /^open\.spotify\.com\/(track\/\w+)/
// ],
//   html: match => {
//   const id = match[ 1 ];
//
//   return (
//     '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">' +
//     `<iframe src="https://open.spotify.com/embed/${ id }" ` +
//     'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
//     'frameborder="0" allowtransparency="true" allow="encrypted-media">' +
//     '</iframe>' +
//     '</div>'
//   );
// }
//
//
// {
//   name: 'instagram',
//     url: /^instagram\.com\/p\/(\w+)/
// },
// {
//   name: 'twitter',
//     url: /^twitter\.com/
// },
// {
//   name: 'googleMaps',
//     url: /^google\.com\/maps/
// },
// {
//   name: 'flickr',
//     url: /^flickr\.com/
// },
// {
//   name: 'facebook',
//     url: /^facebook\.com/
// }
