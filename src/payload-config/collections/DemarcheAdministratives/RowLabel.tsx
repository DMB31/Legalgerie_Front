"use client";
import { useRowLabel } from "@payloadcms/ui";
import { useEffect, useState } from "react";

const RowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ titre?: string }>();
  const [customLabel, setCustomLabel] = useState<string>('Demarche')

  useEffect(() => {
    if (data.titre && rowNumber !== undefined) {
      setCustomLabel(`${rowNumber + 1} : ${data.titre}`)
    } else {
      setCustomLabel(`Demarche`)
    }
  }, [customLabel, data]);

  return <div>{customLabel}</div>;
};

export default RowLabel;
