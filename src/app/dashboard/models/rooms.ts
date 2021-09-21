export interface Room {
    title: string,
    id?: string,
    type?: string
    isLocked?: Boolean,
    teamId?: string,
    lastActivity?: string,
    creatorId?: string,
    created?: string,
    ownerId?: string,
    classificationId?: string
}