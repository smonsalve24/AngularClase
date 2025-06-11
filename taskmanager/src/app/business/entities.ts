export enum Priority{
    HIGH="alta", MEDIUM="media", LOW="baja"
}

export interface TaskUser{
    id: number,
    name: string,
    priority: Priority,
    description: string,
    done:boolean
}

var data: TaskUser={
    id: 0,
    name: "prueba",
    priority: Priority.LOW,
    description: "Prueba descripción",
    done: true
}