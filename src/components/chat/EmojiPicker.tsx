"use client";
import { SmileIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useTheme } from "next-themes";

const EmojiPicker = () => {
  const { theme } = useTheme();
  return (
    <Popover>
      <PopoverTrigger>
        <SmileIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition" />
      </PopoverTrigger>
      <Picker
        emojiSize={18}
        data={data}
        maxFrequentRows={1}
        theme={theme === "dark" ? "dark" : "light"}
      />
      <PopoverContent />
    </Popover>
  );
};

export default EmojiPicker;
