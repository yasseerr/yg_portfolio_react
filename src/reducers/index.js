

//UI reducer
const initialState = {
    current_project: "",
    ui: {
        project_open: false,
        list_open: true
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "DISPLAY_PROJECT":
            return { ...state, current_project: payload.current_project, ui: { ...state.ui, project_open: true } }
        case "HIDE_PROJECT":
            return { ...state, ui: { ...state.ui, project_open: false } }
        case "HIDE_LIST":
            return { ...state, ui: { ...state.ui, list_open: false } }
        case "SHOW_LIST":
            return { ...state, ui: { ...state.ui, list_open: true } }
        default:
            return state
    }
}
