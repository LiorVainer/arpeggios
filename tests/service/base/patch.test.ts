import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import { userService } from "../base/index.test";

describe("HTTP PATCH Method", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  test("patch", async () => {
    const userPatchData = { name: "John Smith" };

    mock.onPatch("user").reply((request) => {
      expect(JSON.parse(request.data)).toEqual(userPatchData);
      return [200];
    });

    await userService.patch(userPatchData);
  });
});
