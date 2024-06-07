export function thirdAngle(a1, a2) {
  if (!Number.isInteger(a1) || !Number.isInteger(a2)) {
    return `the angle must be an integer number`;
  }
  const total = 180;
  return total - a1 - a2;
}

console.log(thirdAngle(30, 60)); //  90
console.log(thirdAngle(60, 60)); //  60
console.log(thirdAngle(43, 78)); //  59
console.log(thirdAngle(10, 20)); //  150
console.log(thirdAngle(10.8, 20));
