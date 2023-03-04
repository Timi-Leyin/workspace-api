export {}
declare global{
    namespace NodeJS{
        interface ProcessEnv{
            NODE_ENV:string;
            SQL_DB:string;
            SQL_USER:string;
            SQL_PASSWORD:string;
            DEV_PORT:number;
            SQL_HOST:string;
        }
    }
}