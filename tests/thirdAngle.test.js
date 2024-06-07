import { describe, expect, it } from "vitest";
import { thirdAngle } from "../src/thirdAngle";

describe("thirdAngle as function", () => {
  it("return an integer of the value of the third angle of a trinagle (sums 180) ", () => {
    //Given
    const a1 = 30;
    const a2 = 60;
    const expected = 90;
    //When
    const result = thirdAngle(a1, a2);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("return an integer of the value of the third angle of a trinagle (sums 180) ", () => {
    //Given
    const a1 = 60;
    const a2 = 60;
    const expected = 60;
    //When
    const result = thirdAngle(a1, a2);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("return an integer of the value of the third angle of a trinagle (sums 180) ", () => {
    //Given
    const a1 = 43;
    const a2 = 78;
    const expected = 59;
    //When
    const result = thirdAngle(a1, a2);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("return an integer of the value of the third angle of a trinagle (sums 180) ", () => {
    //Given
    const a1 = 10;
    const a2 = 20;
    const expected = 150;
    //When
    const result = thirdAngle(a1, a2);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("not an integer input case", () => {
    //Given
    const a1 = 10.8;
    const a2 = 20;
    const expected = `the angle must be an integer number`;
    //When
    const result = thirdAngle(a1, a2);
    //Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });
});
