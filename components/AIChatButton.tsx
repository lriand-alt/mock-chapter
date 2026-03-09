'use client';

export default function AIChatButton() {
  return (
    <button
      disabled
      className="w-full text-left px-3 py-2.5 rounded text-sm cursor-default select-none text-gray-700 flex items-center gap-2"
      aria-label="Åbn AI-chat"
    >
      <span className="text-base leading-none">✨</span>
      <span>AI-chat</span>
    </button>
  );
}
