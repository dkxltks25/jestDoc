// 객체 복사 테스트
test("object assignment", () => {
  const data = { one: 1 };
  data["tow"] = 2;
  expect(data).toEqual({ one: 1, tow: 2 });
});
