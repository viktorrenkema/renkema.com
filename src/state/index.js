import { setGlobal } from "reactn"

export function initState() {
  setGlobal({
    foo: "bar",
    accordion: false,
  })
}
