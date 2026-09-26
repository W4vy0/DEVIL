import { useState } from 'react';

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
  return code ? `/emojis/${code}.png` : '';
};

export default function AppleEmoji({ char, size = 18, className = '' }: AppleEmojiProps) {
  const [hasError, setHasError] = useState(false);
  const emojiCode = APPLE_EMOJI_MAP[char];
  const pxSize = typeof size === 'number' ? `${size}px` : size;

  if (hasError || !emojiCode) {
    return (
      <span
        className={`inline-flex items-center justify-center select-none font-normal leading-none ${className}`}
        style={{
          fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Segoe UI Symbol", sans-serif',
          fontSize: pxSize,
          lineHeight: 1,
          verticalAlign: '-0.12em',
        }}
        role="img"
        aria-label={char}
      >
        {char}
      </span>
    );
  }

  return (
    <img
      src={`/emojis/${emojiCode}.png`}
      alt={char}
      width={typeof size === 'number' ? size : undefined}
      height={typeof size === 'number' ? size : undefined}
      onError={() => setHasError(true)}
      loading="eager"
      decoding="async"
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
