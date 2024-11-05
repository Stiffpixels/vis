import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                "primnavl": "5px 0 0 5px",
                "primnavr": "0 5px 5px 0",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: {
                    blue: "var(--blue-accent)",
                    dark: "var(--dark-accent)",
                },
                border: "var(--border)",
                card: {
                    DEFAULT: "var(--card-grey)",
                    magenta: "var(--card-magenta)",
                    green: "var(--card-green)",
                    yellow: "var(--card-yellow)",
                }
            },
            gridTemplateColumns: {
                body: "10px auto 10px"
            },
            width: {
                view: "95%",
                "view-md": "90%",
                "view-lg": "90%"
            }
        },
    },
    plugins: [],
};
export default config;
