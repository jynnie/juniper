import { nanoid } from "nanoid";
import { useMemo } from "react";

export function useUUID(size?: number) {
  const uuid = useMemo(() => nanoid(size), []);
  return uuid;
}
