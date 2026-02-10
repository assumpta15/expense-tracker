import React, { useState } from 'react';
import EmojiPicker from "emoji-picker-react";
import { LuImage, LuX } from "react-icons/lu";

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3 relative">
      {/* Trigger */}
      <div
        className="flex items-center gap-4 cursor-pointer w-fit"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-primary rounded-lg border">
          {icon ? (
            <img src={icon} alt="icon" className="w-8 h-8" />
          ) : (
            <LuImage />
          )}
        </div>

        <p className="text-sm text-gray-600">
          {icon ? "Change Icon" : "Pick Icon"}
        </p>
      </div>

      {/* Picker */}
      {isOpen && (
        <div className="absolute z-50 mt-3">
          <div className="relative bg-white rounded-lg shadow-lg border">
            <button
              className="w-7 h-7 flex items-center justify-center bg-white border rounded-full absolute top-2 right-2 z-10"
              onClick={() => setIsOpen(false)}
            >
              <LuX />
            </button>

            <EmojiPicker
              onEmojiClick={(emoji) => {
                onSelect(emoji?.imageUrl || "");
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
