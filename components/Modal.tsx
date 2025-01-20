import { Button } from "x-react/button";
import { Modal as M } from "x-react/modal";
import { useDisclosure } from "x-react/hooks";

export const Modal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <M
      title="modal"
      className="z-50"
      trigger={
        <button className="border py-2 px-5 rounded-md border-orange-400">
          open
        </button>
      }
    >
      content
    </M>
  );
};
