import { App } from 'vue';
import components from "./components";

export * from "./components";

export default {
    install: (app: App) => {
        components.forEach((component) => {
            app.use(component as unknown as { install: () => any });
        });
    }
}
