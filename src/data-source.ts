import path from "path";
import "dotenv/config";
import { DataSourceOptions, DataSource } from "typeorm";

export const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  const dbURL: string | undefined = process.env.DATABASE_URL;

  if (!dbURL) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: dbURL,
    synchronize: false,
    logging: true,
    migrations: [migrationsPath],
    entities: [entitiesPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
