"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { BsMoon, BsSun } from "react-icons/bs";

export function ModeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <Button
          className="rounded-full mr-2"
          onClick={() => setTheme("dark")}
          variant="secondary"
          size="sm"
        >
          <BsMoon />

          <span className="sr-only">Toggle theme</span>
        </Button>
      ) : (
        <Button
          className="rounded-full mr-2"
          onClick={() => setTheme("light")}
          variant="secondary"
          size="sm"
        >
          <BsSun />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </>
  );
}
