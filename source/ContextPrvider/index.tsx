import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useReducer
} from 'react'

export interface Action {
  payload?: any
  type: string
}

interface State {
  amount: string
  provider: string
  orderId: string
}

interface AppContext {
  state: State
  storeDispatch: (action: Partial<State>) => void
}

const initialState = {
  amount: '€20,00',
  provider: 'deliveroo',
  orderId: '111'
}

const StoreContext = createContext<AppContext>({
  state: initialState,
  storeDispatch: () => undefined
})

// NO actions defined at the moment

export function StoreProvider ({
  children
}: PropsWithChildren<{}>): ReactElement {
  const [state, storeDispatch] = useReducer(s => s, initialState)

  return (
    <StoreContext.Provider value={{ state, storeDispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useAppContext = (): AppContext => useContext(StoreContext)
