export const [useProvideToggleGroupState, useToggleGroupState] = createInjectionState((initialValue?: string) => {
  const currentValue = shallowRef<string | undefined>(initialValue)
  const id = shallowRef<number>()
  return {
    id,
    currentValue,
  }
})
