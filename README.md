

## Run the project

1. Clone the repository
2. Create a copy of env.template to .env and change env variables
3. Install dependencies ```pnpm install ```
4. Run database ```docker compose up -d ```
5. Run **Prisma** migrations ``` pnpx prisma migrate dev ```
6. Execute seed ```pnpm run seed ``` 
3. Run project ```pnpm run dev ```