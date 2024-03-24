/**
 * Constrains a number to a range.
 *
 * If the number is less than the minimum, it will return the minimum.
 *
 * If the number is greater than the maximum, it will return the maximum.
 *
 * @param input Number to constrain
 * @param min Lower bound
 * @param max Upper bound
 * @returns Number constrained to the range [min, max]
 */
export const constrainToRange = (
  input: number,
  min: number,
  max: number
): number => {
  return Math.max(Math.min(input, max), min);
};

/**
 * Maps a number from one range to another range.
 *
 * @param input Number to map
 * @param r1Start Start of the input range
 * @param r1Stop Stop of the input range
 * @param r2Start Start of the output range
 * @param r2Stop Stop of the output range
 * @param withinBounds Flag indicating whether the mapped value should be constrained within the output range
 * @returns Mapped number within the output range
 */
export const mapInRange = (
  input: number,
  r1Start: number,
  r1Stop: number,
  r2Start: number,
  r2Stop: number,
  withinBounds: boolean = false
): number => {
  const newval =
    ((input - r1Start) / (r1Stop - r1Start)) * (r2Stop - r2Start) + r2Start;

  if (!withinBounds) {
    return newval;
  }

  if (r2Start < r2Stop) {
    return constrainToRange(newval, r2Start, r2Stop);
  } else {
    return constrainToRange(newval, r2Stop, r2Start);
  }
};

/**
 * Normalizes a number within a given range to the range [0, 1].
 *
 * @param input Number to normalize
 * @param min Lower bound of the input range
 * @param max Upper bound of the input range
 * @param withinBounds Flag indicating whether the normalized value should be constrained within the range [0, 1]
 * @returns Normalized number within the range [0, 1]
 */
export const normalize = (
  input: number,
  min: number,
  max: number,
  withinBounds = false
): number => mapInRange(input, min, max, 0, 1, withinBounds);
