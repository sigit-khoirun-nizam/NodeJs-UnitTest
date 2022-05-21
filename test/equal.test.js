test("test ToBe", () => {
    const name = "Nizam";
    const hallo = `Hallo ${name}`;

    expect(hallo).toBe("Hallo Nizam");
});

test("test Equal", () => {
    const person = {id: "nizam"};
    Object.assign(person, {name: "Nizam"});

    expect(person).toEqual({id: "nizam", name: "Nizam"});
});