export interface Step1 {
  name: string;
  website: string;
  location: string;
}

export interface Step2 {
  industry: string;
  technology: string[];
  founded: string;
}

export interface Step2Errors {
  industry: string;
  technology: string;
  founded: string;
}