"use client";
import { SmileIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Picker from "@emoji-mart/react"
import data from "@emoji-mart/data";
import { useTheme } from "next-themes";
import { useState } from "react";

interface EmojiPickerProps {
    onChange: (emoji: string) => void; 
}

const EmojiPicker = ({onChange}: EmojiPickerProps) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <SmileIcon 
          className="h-5 w-5 text-muted-foreground hover:text-foreground transition cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        />
      </PopoverTrigger>
      <PopoverContent>
        <Picker
          emojiSize={18}
          data={data}
          maxFrequentRows={1}
          theme={theme === "dark" ? "dark" : "light"}
          onEmojiSelect={(emoji: any) => {
            onChange(emoji.native);
            setIsOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPicker;
