import React from 'react';

interface AppleEmojiProps {
  char: string;
  size?: number | string;
  className?: string;
}

export const getAppleEmojiUrl = (_char: string): string => '';

export default function AppleEmoji({ char, size = 18, className = '' }: AppleEmojiProps) {
  const pxSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <span
      className={`inline-flex items-center justify-center select-none font-normal leading-none ${className}`}
      style={{
        fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", emoji, sans-serif',
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
