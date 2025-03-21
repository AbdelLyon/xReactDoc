import { Modal as M } from "x-react/modal";

export const Modal = () => {
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
