exports.filtro1 = {
  container: (base, state) => ({
    ...base,
    border: state.isFocused ? null : null
  }),
  control: (base, state) => ({
    ...base,
    background: "slategrey",
    fontFamily: "Arial",
    fontSize: 12
  }),
  menu: base => ({
    ...base,
    fontFamily: "Arial"
  }),

  singleValue: base => ({
    ...base,
    color: "lightgrey"
  }),

  valueContainer: (base, state) => ({
    ...base,
    background: "slategrey",
    color: "red"
  }),
  multiValue: (base, state) => ({
    ...base,
    background: "lightYellow",
    maxWidth: "100px"
  })
}


exports.filtro2 = {
  container: (base, state) => ({
    ...base,
    border: state.isFocused ? null : null
  }),
  control: (base, state) => ({
    ...base,
    background: "lightgrey",
    fontFamily: "Arial",
    fontSize: 12
  }),
  menu: base => ({
    ...base,
    fontFamily: "Arial"
  }),

  singleValue: base => ({
    ...base,
    color: "slategrey"
  }),

  valueContainer: (base, state) => ({
    ...base,
    background: "lightgrey",
    color: "red"
  }),
  multiValue: (base, state) => ({
    ...base,
    background: "lightYellow",
    maxWidth: "100px"
  })
}