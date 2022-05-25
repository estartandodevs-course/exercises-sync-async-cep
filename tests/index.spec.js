const { getAddressByCep } = require("../src/index");

describe("Tests", () => {
  beforeAll(() => {
    jest.setTimeout(30000);
  });

  test("deveria retornar o erro CEP não encontrado", () => {
    expect.assertions(1);
    return expect(getAddressByCep("999999")).rejects.toEqual(
      Error("CEP não encontrado")
    );
  });

  test("deveria retornar Praça da Sé, Sé - São Paulo", async () => {
    const address = await getAddressByCep("01001-000");
    expect(address).toBe("Praça da Sé, Sé - São Paulo");
  });

  test("deveria retornar Rua Domingos Rubbo, Cristo Redentor - Porto Alegre", async () => {
    const address = await getAddressByCep("91040-000");
    expect(address).toBe("Rua Domingos Rubbo, Cristo Redentor - Porto Alegre");
  });

  test("deveria retornar Avenida Cláudio Besserman Vianna, Jacarepaguá - Rio de Janeiro", async () => {
    const address = await getAddressByCep("22775036");
    expect(address).toBe(
      "Avenida Cláudio Besserman Vianna, Jacarepaguá - Rio de Janeiro"
    );
  });

  test("deveria retornar *, * - Jaguaquara", async () => {
    const address = await getAddressByCep("45345-000");
    expect(address).toBe("*, * - Jaguaquara");
  });
});
