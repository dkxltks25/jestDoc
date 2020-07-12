// 객체 복사 테스트
test("object assignment", () => {
  const data = { one: 1 };
  data["tow"] = 2;
  expect(data).toEqual({ one: 1, tow: 2 });
});

// 특정 숫자가 있는지 판단 두수를 더해서 0되는 값이 있는가
test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
