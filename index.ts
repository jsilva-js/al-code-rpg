class Char {
  constructor(
    // traits
    public agility: number,
    public strength: number,
    public perception: number,
    public precision: number,

    // subtraits
    public hitChance: number,
    public evadeChance: number,

    // Attributes
    public lifePoints: number,
    public manaPoints: number
  ) {}
}

describe("test all solution", () => {
  it("should test day 1 solutions", () => {
    expect(true).toBe(69912);
    expect(true).toBe(208180);
  });
});
