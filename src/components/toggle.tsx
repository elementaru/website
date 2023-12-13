"use client";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useDarkMode } from "@/hooks/useDarkMode";

function Toggle() {
  const [enabled, setEnabled] = useState(false);
  const { isDarkMode, toggle } = useDarkMode();
  const handleToggle = () => {
    toggle();
  };

  useEffect(() => {
    setEnabled(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="py-3 text-center">
      <Switch
        checked={enabled}
        onChange={handleToggle}
        className={`${
          enabled ? "bg-gray-700" : "bg-gray-200"
        } relative inline-flex h-[38px] w-[74px] items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">On/Off</span>
        <span
          className={`${
            enabled ? "translate-x-9" : "translate-x-0"
          } inline-block h-[34px] w-[34px] transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
}

export default Toggle;
