"use client";

import { Provider } from "react-redux";
import { reduxStore } from "@/store/index";

const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

export default Providers;
