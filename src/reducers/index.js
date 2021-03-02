

//UI reducer
const initialState = {
    current_project: "",
    ui: {
        project_open: false
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "DISPLAY_PROJECT":
        return {...state,current_project: payload.current_project,ui: { project_open: true}}

    default:
        return state
    }
}
