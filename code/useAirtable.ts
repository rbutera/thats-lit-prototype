import { useState, useEffect } from "react";
import { isAirtableUrl } from "./utils";

type AirtableRecord = {
  id: string;
  fields: Record<string, any>;
};

async function fetchItems(airtableUrl: string): Promise<AirtableRecord[]> {
  console.log("fetching items from Airtable");
  const response = await fetch(airtableUrl);

  if (!response.ok) {
    throw new Error(
      `Airtable endpoint returned status code ${response.status} ${response.statusText}`
    );
  }

  const json = await response.json();
  return json.records;
}

type ThrottleOpts = {
  millisBetweenCalls: 1000;
};

/**
 * Takes a function from string => T as argument and returns a throttled version of it.
 */
function throttle<T>(
  func: (arg: string) => T,
  opts: ThrottleOpts = { millisBetweenCalls: 1000 }
) {
  let cache: { time: number; arg: string; value: T } = {
    time: 0,
    arg: undefined,
    value: undefined
  };

  function shouldUseCache(newArg: string) {
    if (cache.arg !== newArg || cache.arg === undefined) {
      return false;
    }

    const delta = Date.now() - cache.time;

    return delta > opts.millisBetweenCalls;
  }

  return (arg: string) => {
    if (shouldUseCache(arg)) {
      console.log("using cache");
      return cache.value;
    }

    const newValue = func(arg);
    cache = { time: Date.now(), arg, value: newValue };

    return newValue;
  };
}

const throttledFetchItems = throttle(fetchItems);

/**
 * Fetches a set of records from an Airtable API endpoint as a React Hook.
 */
export function useAirTable(airtableUrl: string): any[] {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    let cancelled = false;

    if (!isAirtableUrl(airtableUrl)) {
      return;
    }

    throttledFetchItems(airtableUrl)
      .then(items => {
        if (!cancelled) {
          setItems(items);
        }
      })
      .catch(err => console.warn(err));
    return () => (cancelled = true);
  }, [airtableUrl]);

  return items;
}
