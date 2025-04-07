export interface SquadMember {
    name: string;
    description: string;
}

export interface SquishmallowCard {
    id: number;
    setId: number;
    set: string;
    name: string;
    series: string;
    squishDate?: string;
    collector?: string;
    squad?: string;
    squadList?: SquadMember[];
    description?: string;
    frontDescription?: string;
    parallelType?: string;
}