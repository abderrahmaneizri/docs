import remarkDirective from 'remark-directive';
import remarkHeading from 'remark-heading-id';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { attributeMarkdown, wrapTables } from '/src/themes/accelerator/utilities/custom-markdown.mjs';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    site: 'https://octopus.com',
    integrations: [
        mdx()
    ],
    markdown: {
        shikiConfig: {
            theme: 'nord'
        },
        remarkPlugins: [
            remarkDirective,
            remarkHeading,
            attributeMarkdown,
            wrapTables
        ],
        trailingSlash: 'never',
        extendDefaultPlugins: true,
    },
    server: {
        port: 3000
    },
});
