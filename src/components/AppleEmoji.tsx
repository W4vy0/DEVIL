import React from 'react';

interface AppleEmojiProps {
  char: string;
  size?: number | string;
  className?: string;
}

const APPLE_EMOJI_MAP: Record<string, string> = {
  '💖': '1f496',
  '💕': '1f495',
  '❤️': '2764-fe0f',
  '💘': '1f498',
  '✨': '2728',
  '🎀': '1f380',
  '🦇': '1f987',
  '💌': '1f48c',
  '🌸': '1f338',
  '💗': '1f497',
  '💓': '1f493',
  '🍫': '1f36b',
  '📋': '1f4cb',
  '📜': '1f4dc',
  '⚡': '26a1',
  '📖': '1f4d6',
  '📕': '1f4d5',
  '🔊': '1f50a',
  '🔇': '1f507',
  '♥': '2665-fe0f',
  '💝': '1f49d',
  '🤍': '1f90d',
};

export const getAppleEmojiUrl = (char: string): string => {
  const code = APPLE_EMOJI_MAP[char];
  if (code) {
    return `https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-64/${code}.png`;
  }
  // Generic fallback: convert codepoint
  try {
    const hex = [...char].map((c) => c.codePointAt(0)?.toString(16)).join('-');
    return `https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-64/${hex}.png`;
  } catch {
    return '';
  }
};

export default function AppleEmoji({ char, size = 18, className = '' }: AppleEmojiProps) {
  const [error, setError] = React.useState(false);
  const url = getAppleEmojiUrl(char);

  if (error || !url) {
    return <span className={`inline-block align-middle ${className}`}>{char}</span>;
  }

  const pxSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <img
      src={url}
      alt={char}
      width={typeof size === 'number' ? size : undefined}
      height={typeof size === 'number' ? size : undefined}
      onError={() => setError(true)}
      loading="lazy"
      draggable={false}
      className={`inline-block align-middle object-contain select-none pointer-events-none ${className}`}
      style={{
        width: pxSize,
        height: pxSize,
        verticalAlign: '-0.15em',
      }}
    />
  );
}
