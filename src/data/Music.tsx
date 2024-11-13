import { MusicInfo } from "../pages/Music";
// import dummyIcon from "./dmy.png";

import jfcct from "./music/concerto.png";
import sczo from "./music/scherzo.png";
import kzn from "./music/kzn.png";
import isob from "./music/in_search_of_beauty.jpg";
import btd from "./music/being_towards_death.png";
import imp9 from "./music/imp9.jpg";
import imp8 from "./music/imp8.jpg";
import imp4 from "./music/imp4.png";
import ymnark from "./music/ymnark.jpg";
import obliv from "./music/oblivion.jpg";
import mtyi from "./music/mtyi.webp";
import bkht from "./music/brokenhearted.webp";
import hsch from "./music/highschool.jpg";
import dpt from "./music/departure.jpg";
import tmtkfnz from "./music/tmtkfnz.jpg";
import pfcbh from "./music/bassoon.jpg";
import knjnhy from "./music/knjnhy.webp";

const p1: MusicInfo = {
  id: "p1",
  img: jfcct,
  title: "John Field - Piano Concerto No.2 in Ab Major",
  brief: "Performed at the Strong Auditorium with URCO (start from 15:15)",
  link: "https://livestream.com/accounts/1852707/events/4879399/videos/202198649",
  type: "performance",
};

const p2: MusicInfo = {
  id: "p2",
  img: sczo,
  title: "Chopin - Scherzo No.2 in Bb Minor",
  brief: "Performed at the Kilbourn Hall",
  link: "https://www.youtube.com/watch?v=FFK-qEqqhxo&ab_channel=EastmanCommunityMusicSchool",
  type: "performance",
};

const p3: MusicInfo = {
  id: "p3",
  img: kzn,
  title: "Marasy - 弧キヅネの乱",
  brief: "Performed at the company I worked for",
  link: "https://youtu.be/hZdDiOWDOqY",
  type: "performance",
};

const i1: MusicInfo = {
  id: "i1",
  img: isob,
  title: "In Search of Beauty",
  brief: "Improvised on Roland A49 with Logic Pro",
  link: "https://www.bilibili.com/video/BV1Lp4y1T79x/",
  type: "improvisation",
};

const i2: MusicInfo = {
  id: "i2",
  img: btd,
  title: "Being Towards Death",
  brief:
    "Improvised on Roland A49 with GarageBand. This improvisation summarizes my college years and a brief gap after my graduation.",
  link: "https://youtu.be/ds_4NweQ4LU",
  type: "improvisation",
};

const i3: MusicInfo = {
  id: "i3",
  img: imp9,
  title: "Improvisation No.9",
  brief: "Improvised on Roland A49 with GarageBand",
  link: "https://www.bilibili.com/video/BV1H34y1Q7B9/",
  type: "improvisation",
};

const i4: MusicInfo = {
  id: "i4",
  img: imp8,
  title: "Improvisation No.8",
  brief: "Improvised on Roland A49 with GarageBand",
  link: "https://www.bilibili.com/video/BV1rL411H7AD/",
  type: "improvisation",
};

const i5: MusicInfo = {
  id: "i5",
  img: imp4,
  title: "Improvisation No.4",
  brief: "Improvised in the piano practice room at Strong Auditorium",
  link: "https://youtu.be/Qs8XFUVJUFE",
  type: "improvisation",
};

const i6: MusicInfo = {
  id: "i6",
  img: ymnark,
  title: "夢の在り方、夢の形",
  brief: "Improvised on Lagrima Digital Piano",
  link: "https://www.bilibili.com/video/BV1fi4y1P77d/",
  type: "improvisation",
};

const c1: MusicInfo = {
  id: "c1",
  img: obliv,
  title: "Oblivion",
  brief:
    "Draft in 2018 fall, completed in 2021 spring. This is an orchestral piece inspired by my ambivalence about the conflict between following my passion and meeting career demands.",
  link: "https://www.bilibili.com/video/BV1Fh411h7n3/",
  type: "composition",
};

const c2: MusicInfo = {
  id: "c2",
  img: mtyi,
  title: "待宵",
  brief:
    "Composed in 2021 spring. Piano solo. This piece serves as an obscure illustration of the concept of 'waiting'.",
  link: "https://www.bilibili.com/video/BV1g64y167eX/",
  type: "composition",
};

const c3: MusicInfo = {
  id: "c3",
  img: bkht,
  title: "Gentleness",
  brief: "Composed in 2020 fall. I was sad.",
  link: "https://youtu.be/RfDBy4V73so",
  type: "composition",
};

const c4: MusicInfo = {
  id: "c4",
  img: hsch,
  title: "The High School Me and the Distant Light",
  brief:
    "Composed in 2020 fall. It captures the nostalgia and memories of my high school years.",
  link: "https://www.bilibili.com/video/BV1L64y1F7m9/",
  type: "composition",
};

const c5: MusicInfo = {
  id: "c5",
  img: dpt,
  title: "Departure",
  brief:
    "A tiny composition created in 2020 summer. It portrays both the excitement and the confusion that come with becoming an adult.",
  link: "https://www.bilibili.com/video/BV1QZ4y1u7rj/",
  type: "composition",
};

const c6: MusicInfo = {
  id: "c6",
  img: tmtkfnz,
  title: "Cold breezes in MidSummer",
  brief:
    "Composed in 2020 summer. Cold winds sometimes blow through the midsummer air of Rochester. This contrast feels poetic and deeply inspiring.",
  link: "https://www.bilibili.com/video/BV1At4y1X7WJ/",
  type: "composition",
};

const c7: MusicInfo = {
  id: "c7",
  img: pfcbh,
  title: "Pieces for clarinet, bassoon, and harp",
  brief:
    "Composed in 2020 summer. I fell in love with the sound of bassoon during that time, and was inspired to explore this sound in my composition.",
  link: "https://www.bilibili.com/video/BV1Ep4y1S7GD/",
  type: "composition",
};

const c8: MusicInfo = {
  id: "c8",
  img: knjnhy,
  title: "彼女の部屋",
  brief:
    "Composed in 2016, when I was in high school, this piece was inspired by the Monogatari Series. I aimed to capture the unique atmosphere of a closed, intimate living space.",
  link: "https://www.bilibili.com/video/BV1yt4y1Q7ke/",
  type: "composition",
};

export const mur_list = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  p1,
  p2,
  p3,
];
