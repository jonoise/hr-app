import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SWRConfig } from "swr";

const theme = extendTheme({});

createInertiaApp({
    resolve: (name) => {
        // @ts-ignore
        const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
        return pages[`./Pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ChakraProvider theme={theme}>
                <SWRConfig
                    value={{
                        fetcher: (resource, init) =>
                            fetch(resource, init).then((res) => res.json()),
                    }}
                >
                    <App {...props} />
                </SWRConfig>
            </ChakraProvider>
        );
    },
});
