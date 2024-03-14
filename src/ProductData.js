import a51 from './image/a51.webp';
import a53 from './image/a53jpg.jpg';
import z5 from './image/z5.jpeg';
import iphone15 from './image/iphone15.webp';
import acer from './image/acer.jpg';
import macbook from './image/macbook.jpeg';
import coolpad1 from './image/coolpad1.jpg';
import coolpad2 from './image/coolpad2.jpg';
import monitor1 from './image/monitor1.jpg';
import monitor2 from './image/monitor2.jpeg';
import speaker1 from './image/speaker1.jpg';
import speaker2 from './image/speaker2.jpg';

const productData = [
  {
    title: "Phone",
    infos: [
      { id: 1, title: "Samsung A53", image: a53, price: 12_000_000, count: 34 },
      { id: 2, title: "Samsung A51", image: a51, price: 8_000_000, count: 15 },
      { id: 3, title: "Sony Z5", image: z5, price: 10_000_000, count: 53 },
      { id: 4, title: "iPhone 15", image: iphone15, price: 77_000_000, count: 12,},
    ],
  },
  {
    title: "LapTop",
    infos: [
      { id: 1, title: "Acer Aspire", image: acer, price: 30_000_000, count: 17},
      { id: 2, title: "Macbook Pro M1", image: macbook, price: 56_000_000, count: 11},
    ],
  },
  {
    title: "CoolPad",
    infos: [
      { id: 1, title: "Cool Pad 1", image: coolpad1, price: 800_000, count: 36},
      { id: 2, title: "Cool Pad 2", image: coolpad2, price: 300_000, count: 52,
      },
    ],
  },
  {
    title: "Monitor",
    infos: [
      { id: 1, title: "Monitor 1", image: monitor1, price: 8_000_000, count: 36},
      { id: 2, title: "Monitor 2", image: monitor2, price: 7_000_000, count: 52,
      },
    ],
  },
  {
    title: "Speaker",
    infos: [
      { id: 1, title: "Speaker 1", image: speaker1, price: 2_000_000, count: 60},
      { id: 2, title: "Speaker 2", image: speaker2, price: 3_000_000, count: 10,
      },
    ],
  },
];

export default productData;