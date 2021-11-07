import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Api } from "../../api";
import { match, tournaments } from "../fixtures";

const mock = new MockAdapter(axios);
const api = new Api();

test("should handle fetching of tournament categories", async () => {
  mock.onGet(`${api.baseURL}/tournaments`).reply(200, tournaments);

  const response = await axios.get(`${api.baseURL}/tournaments`);
  expect(response.data).toStrictEqual(tournaments);
});

test("should handle fetching of matches by tournament id", async () => {
  mock.onGet(`${api.baseURL}/matches/1`).reply(200, match);

  const response = await axios.get(`${api.baseURL}/matches/1`);
  expect(response.data).toStrictEqual(match);
});
