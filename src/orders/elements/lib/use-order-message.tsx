import React, {useCallback} from "react";
import useMessages from "../../../library/lib/use-messages";
import SaveOrderMessage from "../components/save-order-message";

export default function useOrderMessage() {
  const message = useMessages();
  return useCallback(
    (id: string) => {
      message.success({
        content: <SaveOrderMessage id={id} />,
        duration: 4,
      });
    },
    [message],
  );
}
