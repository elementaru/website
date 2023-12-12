import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./useLocalStorage";

function useAnalytics() {
  const [actions, setActions] = useState<any[]>([]);
  const [user, setUser] = useState({});
  const [previous, setPrevious] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [anonymousId, setAnonymousId] = useLocalStorage("anonymousId", "NA");

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
      const action = {
        name: events.VIEW_PAGE,
        userId: "",
        anonymousId,
        timestamp: Date.now(),
        properties: {
          path: pathname,
        },
      };
      console.log(action);
      fetch(process.env.API_URL || "", {
        method: "POST",
        body: JSON.stringify(action),
      });
      setPrevious(pathname);
      setActions((a) => [...a, action]);
    };

    const trackAttribution = async () => {
      const action = {
        name: events.ATTRIBUTE_VISIT,
        userId: "",
        anonymousId: uuidv4(),
        timestamp: Date.now(),
        properties: {
          source,
          medium,
          campaign,
          term,
          content,
        },
      };
      console.log(action);
      fetch(process.env.API_URL || "", {
        method: "POST",
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

    if (anonymousId === "NA") {
      setAnonymousId(uuidv4());
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
