import { useState } from "react"
import { AdminCards } from "../../Components/AdminCards"
import { useFetchProjects } from "../../Hooks/Projects/useFetchProject"
import type { FetchProjectType } from "../../Types/ProjectTypes"
import { PopUp } from "../../Components/PopUp"
import { PostProject } from "./Components/PostProject"

export function AdminProjects(){

    const [projectAction, setProjectAction] = useState<"Post" | "Patch" | "Delete" | "Info">()
    const [selectedProject, setSelectedProject] = useState<FetchProjectType>()

    const {projects} = useFetchProjects()

    console.log(projects)
    
    return(
        <section
            className="flex flex-col"
        >
            <h1
                className="crudHeaders"
            >
                WildEnterprise Projects
            </h1>

            <button
                className="postInstanceButton"
                onClick={() => setProjectAction("Post")}
            >
                Add Project
            </button>

            {projects.length === 0 &&
                <p>No Projects</p>
            }

            {projectAction === "Post" &&
                <PopUp>
                    <PostProject 
                        onClose={() => setProjectAction(undefined)}
                    />
                </PopUp>
            }

            <div
                className="grid grid-cols-3"
            >
                {projects.map((project, index) => {
                    const{name, img} = project
                    return(
                        <AdminCards 
                            key={index}
                            name={name}
                            img={img}
                            onPatch={() => {
                                setProjectAction("Patch")
                                setSelectedProject(project)
                            }}
                            onDelete={() => {
                                setProjectAction("Delete")
                                setSelectedProject(project)
                            }}
                            onSelect={() => {
                                setProjectAction("Info")
                                setSelectedProject(project)
                            }}
                        />
                    )
                })}
            </div>
        </section>
    )
}