"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/Command";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import debounce from "lodash.debounce";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Searchbar = () => {
  const commandRef = useRef(null);
  const [input, setInput] = useState("");
  const router = useRouter();

  const {
    data: products,
    refetch,
    isFetched,
  } = useQuery({
    queryFn: async () => {
      if (!input) return [];

      const { data } = await axios.get(`/api/search?q=${input}`);
      console.log(data);

      return data;
    },
  });

  const request = debounce(() => {
    refetch();
  }, 1000);

  const debounceRequest = useCallback(() => {
    request();
  }, []);

  const pathname = usePathname();

  useEffect(() => setInput(""), [pathname]);

  return (
    <Command className="relative rounded-lg border max-w-sm md:max-w-4xl z-50 overflow-visible">
      <CommandInput
        className="outline-none border-none focus:border-none focus:outline-none ring-0"
        placeholder="Search Products..."
        value={input}
        onValueChange={(text) => {
          setInput(text);
          debounceRequest();
        }}
      />
      {input.length > 0 && (
        <CommandList ref={commandRef} className="absolute bg-white top-full inset-x-0 shadow rounded-b-md">
          {isFetched && <CommandEmpty>No results found.</CommandEmpty>}
          {products?.length! > 0 && (
            <CommandGroup heading="Products">
              {products?.map((product: any) => (
                <CommandItem
                  onSelect={(e) => {
                    router.push(`/p/${product.id}`);
                    router.refresh();
                  }}
                  key={product.id}
                  value={product.name}
                >
                  <div className="relative flex gap-2 items-center cursor-pointer w-full">
                    <div className="relative h-4 w-4 md:h-10 md:w-10">
                      <Image fill alt="product-img" src={product.imageUrl} />
                    </div>
                    <p className="text-sm md:text-lg truncate text-ellipsis overflow-hidden">{product.name}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      )}
    </Command>
  );
};

export default Searchbar;
