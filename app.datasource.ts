import { DataSource, DataSourceOptions } from "typeorm";
import { Product } from "./src/product.entity";
import { Addproduct1706143501468 } from "./migrations/1706143501468-addproduct";

export const options: DataSourceOptions = {
    type: "sqlite",
    database: "app.db",
    migrations: [Addproduct1706143501468],
    entities: [Product],
}

const ds = new DataSource(options);

export default ds;