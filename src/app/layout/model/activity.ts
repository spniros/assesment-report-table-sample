export interface Activity{
    
    attempts: Attempts;
content: string;
skill:  string;
student:  string;
time:  string;
type:  string;
}

export interface Attempts{
    weeks:string[];
    values:number[]
}