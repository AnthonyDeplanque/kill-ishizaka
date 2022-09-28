const randomize = (min: number, max: number): number => Math.trunc(Math.random() * (max + 1 - min) + min);

export default randomize;
