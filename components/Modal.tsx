import { Modal as M } from "x-react/modal";

export const ModalSize = () => {
  const sizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "full",
  ] as const;

  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <M
          key={size}
          placement="auto"
          title={`Modal ${size}`}
          size={size}
          className="z-50"
          trigger={
            <button className="border py-2 px-5 rounded-md bg-content1 border-border">
              Open {size}
            </button>
          }
        >
          <div>Contenu de la modal {size}</div>
        </M>
      ))}
    </div>
  );
};

export const ModalPlacement = () => {
  const placements = ["center", "top", "bottom", undefined] as const;

  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement, index) => (
        <M
          key={index}
          title={`Modal ${placement || "default"}`}
          placement={placement}
          className="z-50"
          trigger={
            <button className="border py-2 px-5 rounded-md bg-content1 border-border">
              Open {placement || "default"}
            </button>
          }
        >
          <div>Contenu de la modal avec placement {placement || "default"}</div>
        </M>
      ))}
    </div>
  );
};

export const ModalScrollBehavior = () => {
  const scrollBehaviors = ["inside", "outside"] as const;

  return (
    <div className="flex flex-wrap gap-4">
      {scrollBehaviors.map((behavior, index) => (
        <M
          key={index}
          title={`Modal ${behavior || "default"}`}
          scrollBehavior={behavior}
          size="2xl"
          className="z-50"
          trigger={
            <button className="border py-2 px-5 rounded-md bg-content1 border-border">
              Scroll {behavior || "default"}
            </button>
          }
        >
          <div className="space-y-4">
            <p>Contenu avec scrollBehavior: {behavior || "default"}</p>
            {Array(20)
              .fill(undefined)
              .map((_, i) => (
                <p key={i}>
                  Ligne de contenu #{i + 1} Lorem ipsum dolor sit amet
                  consectetur adipisicing elit Laborum...
                </p>
              ))}
          </div>
        </M>
      ))}
    </div>
  );
};
