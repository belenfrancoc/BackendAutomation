// @ts-check
const { test, expect, request } = require("@playwright/test");

test("Verify ToDo.ly API get token", async ({ context }) => {
  const api = await request.newContext();
  const username = "belem@gmail.com";
  const password = "12345678";
  // Encode credentials in Base64
  const credentials = Buffer.from(`${username}:${password}`).toString('base64');

  const response = await api.get("https:/todo.ly/api/authentication/token.json", {

    headers: {
      Authorization:`Basic ${credentials}`
    }
    
  });

  const responseBody = await response.json()
  const responseStatusCode = response.status()
  await expect(responseStatusCode, "Verify status code is 200").toEqual(200)
  await expect(responseBody).not.toEqual(null)
});
