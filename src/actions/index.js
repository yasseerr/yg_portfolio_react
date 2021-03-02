
//UI actions

export const displayProject = (project)=>{
    return{
        type: "DISPLAY_PROJECT",
        payload:{
            current_project: project
        }
    }
}

export const hideProject = (payload) => ({
    type: "HIDE_PROJECT",
    payload
})
