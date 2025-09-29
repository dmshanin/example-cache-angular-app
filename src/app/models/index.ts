export interface ApiData {
    message: string;
    timestamp: string;
    value?: number;
  }
  
  export interface StaticData {
    message: string;
    countries: string[];
    cachedAt: string;
  }
  
  export interface TimeData {
    currentTime: string;
    server: string;
  }
  
  export type CacheableData = ApiData | StaticData | TimeData;