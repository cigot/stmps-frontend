export interface PostType {
    id: string;
    image: string;
    stamps: StampType[];
    createdAt: string;
}

export interface StampType {
    id: string;
    image: string;
    x: number;
    y: number;
}

export interface ProfileType {
    id: string;
    name: string;
    image: string;
    title: string;
    bio: string;
}

export interface OutputType {
    status: number;
    error?: string;
    json?: Object;
}
