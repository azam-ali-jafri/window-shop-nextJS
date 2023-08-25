"use client";
import React, { useRef, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/Command";

const Searchbar = () => {
  const commandRef = useRef(null);
  const [input, setInput] = useState("");

  return (
    <Command className="relative rounded-lg border max-w-4xl z-50 overflow-visible">
      <CommandInput
        className="outline-none border-none focus:border-none focus:outline-none ring-0"
        placeholder="Search Products..."
      />
      {input.length > 0 && (
        <CommandList ref={commandRef} className="absolute bg-white top-full inset-x-0 shadow rounded-b-md"></CommandList>
      )}
    </Command>
  );
};

export default Searchbar;
