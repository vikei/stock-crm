import React, {useCallback} from "react";
import useMessages from "../../library/lib/use-messages";
import SaveProductMessage from "../components/save-product-message";

export default function useProductMessage() {
  const message = useMessages();
  return useCallback(
    (id: string) => {
      message.success({
        content: <SaveProductMessage id={id} />,
        duration: 4,
      });
    },
    [message],
  );
}
