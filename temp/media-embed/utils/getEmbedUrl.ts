import videoParser from 'js-video-url-parser';

const YOUTUBE_PREFIX = 'https://www.youtube.com/embed/';
const VIMEO_PREFIX = 'https://player.vimeo.com/video/';
const DAILYMOTION_PREFIX = 'https://www.dailymotion.com/embed/video/';
const YOUKU_PREFIX = 'https://player.youku.com/embed/';
const COUB_PREFIX = 'https://coub.com/embed/';

/**
 * Get embed video url.
 * If not found or not allowed, return undefined.
 */
export const getEmbedUrl = ({
  url,
  providers = ['youtube', 'vimeo', 'dailymotion', 'youku', 'coub'],
}: {
  /**
   * Url to parse.
   */
  url: string;

  /**
   * Allowed providers.
   */
  providers?: string[];
}) => {
  const videoData: { provider: string; id: string } = videoParser.parse(url);
  if (!videoData) return;

  const { provider, id } = videoData;

  if (!providers.includes(provider)) return;

  const providerUrls: Record<string, string> = {
    youtube: `${YOUTUBE_PREFIX}${id}`,
    vimeo: `${VIMEO_PREFIX}${id}`,
    dailymotion: `${DAILYMOTION_PREFIX}${id}`,
    youku: `${YOUKU_PREFIX}${id}`,
    coub: `${COUB_PREFIX}${id}`,
  };

  return providerUrls[provider];
};
