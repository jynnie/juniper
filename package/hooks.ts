import { nanoid } from "nanoid";
import { useMemo } from "react";

export function useUUID() {
  const uuid = useMemo(() => nanoid(), []);
  return uuid;
}
