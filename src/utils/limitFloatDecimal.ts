export const limitFloatDecimal = (number: number): number => {
    return Math.trunc(number * 10) / 10;
};
