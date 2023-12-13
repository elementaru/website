import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./useLocalStorage";

function useAnalytics() {
  const [actions, setActions] = useState<any[]>([]);
  const [previous, setPrevious] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [anonymousId, setAnonymousId] = useLocalStorage(
    "anonymousId",
    uuidv4()
  );

  const events = {
    VIEW_PAGE: "view_page",
    ATTRIBUTE_VISIT: "attribute_visit",
  };

  useEffect(() => {
    const source = searchParams.get("utm_source");
    const medium = searchParams.get("utm_medium");
    const campaign = searchParams.get("utm_campaign");
    const term = searchParams.get("utm_term");
    const content = searchParams.get("utm_content");

    const trackPageView = async () => {
      setAnonymousId(anonymousId);
      const action = {
        event: {
          name: events.VIEW_PAGE,
          userId: "",
          anonymousId,
          timestamp: Date.now(),
          properties: {
            path: pathname,
          },
        },
      };
      fetch(process.env.NEXT_PUBLIC_API_URL || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action),
      });
      setPrevious(pathname);
      setActions((a) => [...a, action]);
    };

    const trackAttribution = async () => {
      setAnonymousId(anonymousId);
      const action = {
        event: {
          name: events.ATTRIBUTE_VISIT,
          userId: "",
          anonymousId,
          timestamp: Date.now(),
          properties: {
            source,
            medium,
            campaign,
            term,
            content,
          },
        },
      };
      fetch(process.env.NEXT_PUBLIC_API_URL || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action),
      });
      router.replace(pathname, undefined);
    };

    if (previous !== pathname) {
      trackPageView();
    }

    if (previous !== pathname && campaign) {
      trackAttribution();
    }
  }, [
    anonymousId,
    events.ATTRIBUTE_VISIT,
    events.VIEW_PAGE,
    pathname,
    previous,
    router,
    searchParams,
    setAnonymousId,
  ]);

  return [anonymousId, actions];
}

export default useAnalytics;
