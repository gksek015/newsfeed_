export const getYoutubeThumbnailUrl = (youtubeUrl) => {
  let videoId = '';

  // 표준 링크 처리
  if (youtubeUrl.includes('youtube.com/watch?v=')) {
    videoId = youtubeUrl.replace('https://www.youtube.com/watch?v=', '').split('&')[0];
  }
  // 짧은 링크 처리
  else if (youtubeUrl.includes('youtu.be/')) {
    videoId = youtubeUrl.replace('https://youtu.be/', '').split('?')[0];
  }
  // 임베드 링크 처리
  else if (youtubeUrl.includes('youtube.com/embed/')) {
    videoId = youtubeUrl.replace('https://www.youtube.com/embed/', '').split('?')[0];
  }

  // 썸네일 URL 반환
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
};
