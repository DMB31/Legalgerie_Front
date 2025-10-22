import { notFound } from "next/navigation";

const useFetch = async (uri: string) => {
  const data = await fetch(uri);
  if (!data.ok) {
    notFound()
  }
  const res = await data.json();
  return res;
};

export default useFetch