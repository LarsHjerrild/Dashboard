
export enum PRIORITIES {
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL
}
export enum CATEGORIES {
    DEVELOPMENT,
    RELATIONAL,
    MUSIC,
    ARTS,
    SPORTS,
    MAINTENANCE,
    TRANSPORT,
    LEARNING,
    FOOD,
    FUN
}

export class Task {
    name: string;
    description: string;
    creation_date?: Date;
    due_date: Date;
    category: CATEGORIES;
    priority: PRIORITIES;
    goal_origin: string;
    time_estimate: number;
}

export const TASKS :Task[] = [
    {
        name: "Set up Build",
        description: "work",
        creation_date: new Date(),
        due_date: new Date(),
        category: CATEGORIES.LEARNING,
        priority: PRIORITIES.HIGH,
        goal_origin: "unknown",
        time_estimate: 10
    },
    {
        name: "Set up backend",
        description: "work",
        creation_date: new Date(),
        due_date: new Date(),
        category: CATEGORIES.MUSIC,
        priority: PRIORITIES.CRITICAL,
        goal_origin: "unknown",
        time_estimate: 12
    },
    {
        name: "Play keyboard tunes",
        description: "work",
        creation_date: new Date(),
        due_date: new Date(),
        category: CATEGORIES.DEVELOPMENT,
        priority: PRIORITIES.LOW,
        goal_origin: "unknown",
        time_estimate: 14
    }
];