import { render, screen } from "@testing-library/react"
import SearchBox from "./searchBox"

test("render the search box",()=>{
  render(<SearchBox/>);
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});