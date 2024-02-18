"use client"

import { SessionProvider } from 'next-auth/react'
import { Provider } from "react-redux"
import { store } from "@/store/index"

const Providers = (props: React.PropsWithChildren) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        {props.children}
      </Provider>
    </SessionProvider>
  )
}

export default Providers
