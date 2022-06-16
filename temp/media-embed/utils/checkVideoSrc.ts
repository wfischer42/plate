import videoParser from 'js-video-url-parser';

export const checkVideoSrc = async (rule: any, value: any) => {
  const videoObj = videoParser.parse(value);
  if (!videoObj) return Promise.reject('Video not found');

  const { provider } = videoObj;
  const providers = ['youtube', 'dailymotion', 'vimeo', 'youku'];
  if (!providers.includes(provider)) {
    return Promise.reject('Video not found');
  }
  return Promise.resolve();
};
