import { useEffect } from "react";

const SetTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title + " | budgie";
  }, [title]);

  return null;
};

export default SetTitle;
