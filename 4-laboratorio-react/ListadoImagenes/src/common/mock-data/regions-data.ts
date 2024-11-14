export interface RegionEntity {
  id: number;
  name: string;
  img: string;
  iconImg: string;
  selected: boolean;
}

export const REGIONSDATA: RegionEntity[] = [
  {
    id: 18,
    name: "Zaun",
    img: "/src/common/img/zaun.jpg",
    iconImg: "src/common/img/zaun_crest_icon.png",
    selected: false,
  },
  {
    id: 15,
    name: "Piltover",
    img: "/src/common/img/piltover.jpg",
    iconImg: "src/common/img/piltover_crest_icon.png",
    selected: false,
  },
  {
    id: 17,
    name: "Shadow Isles",
    img: "/src/common/img/shadow_isles.jpg",
    iconImg: "src/common/img/shadow_isles_crest_icon.png",
    selected: false,
  },
  {
    id: 20,
    name: "Demacia",
    img: "/src/common/img/demacia.jpg",
    iconImg: "src/common/img/demacia_crest_icon.png",
    selected: false,
  },
  {
    id: 21,
    name: "Shurima",
    img: "/src/common/img/shurima.jpg",
    iconImg: "src/common/img/shurima_crest_icon.png",
    selected: false,
  },
  {
    id: 14,
    name: "Freljord",
    img: "/src/common/img/freljord.jpg",
    iconImg: "src/common/img/freljord_crest_icon.png",
    selected: false,
  },
  {
    id: 16,
    name: "Runeterra",
    img: "/src/common/img/runeterra.jpg",
    iconImg: "src/common/img/default_emblem.png",
    selected: false,
  },
  {
    id: 13,
    name: "Ionia",
    img: "/src/common/img/ionia.jpg",
    iconImg: "src/common/img/iona_crest_icon.png",
    selected: false,
  },
  {
    id: 19,
    name: "The Void",
    img: "/src/common/img/the_void.jpg",
    iconImg: "src/common/img/void_crest_icon.png",
    selected: false,
  },
  {
    id: 22,
    name: "Targon",
    img: "/src/common/img/targon.jpg",
    iconImg: "src/common/img/mt_targon_crest_icon.png",
    selected: false,
  },
];
