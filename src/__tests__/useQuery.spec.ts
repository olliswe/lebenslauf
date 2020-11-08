import { renderHook } from "@testing-library/react-hooks";
import useQuery from "../queries/useQuery";
import get from "lodash/get";

const API_URL = "https://httpbin.org";

test("useQuery without authorization", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useQuery("foo", "/get?foo1=bar1&foo2=bar2", {
      apiUrl: API_URL,
    })
  );
  await waitForNextUpdate();
  expect(get(result.current.data, "args")).toEqual({
    foo1: "bar1",
    foo2: "bar2",
  });
  expect(result.current.status).toEqual("success");
});

test("useQuery with authorization", async () => {
  Object.defineProperty(window, "localStorage", {
    value: { getItem: () => "myToken" },
  });
  const { result, waitForNextUpdate } = renderHook(() =>
    useQuery("auth", "/bearer", {
      apiUrl: API_URL,
    })
  );
  await waitForNextUpdate();
  expect(result.current.data).toEqual({
    authenticated: true,
    token: "myToken",
  });
});

test("useQuery with reducer", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useQuery("foo2", "/get?foo1=bar1&foo2=bar2", {
      apiUrl: API_URL,
      reducer: (data: any) => ({
        ...data,
        args: { ...data.args, foo3: data.args.foo2 + "2" },
      }),
    })
  );
  await waitForNextUpdate();
  expect(get(result.current.data, "args")).toEqual({
    foo1: "bar1",
    foo2: "bar2",
    foo3: "bar22",
  });
  expect(result.current.status).toEqual("success");
});

test("request fails", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useQuery("requestFailure", "/status/404", {
      apiUrl: API_URL,
    })
  );
  await waitForNextUpdate();
  expect(result.current.isError).toEqual(true);
  expect(result.current.status).toEqual("error");
});

test("schema validation fails", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useQuery("validationTest", "/get?foo1=bar1&foo2=bar2", {
      apiUrl: API_URL,
      schema: {
        validate: () => {
          throw new Error("foo");
        },
      },
    })
  );
  await waitForNextUpdate();
  expect(result.current.status).toEqual("error");
  expect(get(result.current, "error.message")).toEqual("foo");
});
