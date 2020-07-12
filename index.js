const obj = [
  {
    id: 1,
    step: {
      id: 1,
      value: 2,
    },
  },
];

const a = "value";
const t = obj.map((i) =>
  i.id === 1 ? { ...i, step: { ...i.step, [a]: 3 } } : i
);
console.dir(t);
