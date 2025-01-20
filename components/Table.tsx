"use client";

import { DataGrid, type ColumnDefinition } from "x-react/datagrid";

type TableData = {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
};

const tableData: TableData[] = [
  {
    id: 1,
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Contenu du bouton",
  },
  {
    id: 2,
    prop: "variant",
    type: "solid | bordered | light | flat | faded | shadow | ghost",
    default: "solid",
    description: "Style visuel du bouton",
  },
  {
    id: 3,
    prop: "color",
    type: "default | primary | secondary | success | warning | danger",
    default: "default",
    description: "Couleur du bouton",
  },
  {
    id: 4,
    prop: "size",
    type: "sm | md | lg",
    default: "md",
    description: "Taille du bouton",
  },
  {
    id: 5,
    prop: "radius",
    type: "none | sm | md | lg | full",
    default: "-",
    description: "Arrondi des coins du bouton",
  },
  {
    id: 6,
    prop: "startContent",
    type: "ReactNode",
    default: "-",
    description: "Contenu à afficher au début du bouton",
  },
  {
    id: 7,
    prop: "endContent",
    type: "ReactNode",
    default: "-",
    description: "Contenu à afficher à la fin du bouton",
  },
  {
    id: 8,
    prop: "spinner",
    type: "ReactNode",
    default: "-",
    description: "Composant de chargement personnalisé",
  },
  {
    id: 9,
    prop: "spinnerPlacement",
    type: "start | end",
    default: "start",
    description: "Position du spinner de chargement",
  },
  {
    id: 10,
    prop: "fullWidth",
    type: "boolean",
    default: "false",
    description: "Le bouton prend toute la largeur disponible",
  },
  {
    id: 11,
    prop: "isIconOnly",
    type: "boolean",
    default: "false",
    description: "Bouton en mode icône uniquement",
  },
  {
    id: 12,
    prop: "isDisabled",
    type: "boolean",
    default: "false",
    description: "Désactive le bouton",
  },
  {
    id: 13,
    prop: "isLoading",
    type: "boolean",
    default: "false",
    description: "Affiche l'état de chargement",
  },
  {
    id: 14,
    prop: "disableRipple",
    type: "boolean",
    default: "false",
    description: "Désactive l'effet de ripple",
  },
  {
    id: 15,
    prop: "disableAnimation",
    type: "boolean",
    default: "false",
    description: "Désactive les animations",
  },
];

export const Table = () => {
  const columns: ColumnDefinition<any>[] = [
    { field: "prop", header: "Propriété", sortable: false },
    { field: "type", header: "Type", sortable: false },
    { field: "default", header: "Défaut", sortable: false },
    { field: "description", header: "Description", sortable: false },
  ];

  return (
    <DataGrid
      columns={columns}
      variant="bordered"
      rows={tableData}
      classNames={{
        wrapper:
          "dark:bg-[#0f172b] mt-6 border dark:border-[#2d2d2d] dark:shadow-none",
        th: "dark:bg-[#1e293b]",
        tr: "first:border-none border-t",
      }}
    />
  );
};
