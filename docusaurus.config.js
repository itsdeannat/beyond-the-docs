// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Beyond the Docs',
  tagline: 'What can I learn by building the things I document?',
  favicon: 'img/airplane.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://beyond-the-docs.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/beyond_the_docs_social_card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Beyond the Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/undraw_airplane_do9t.svg',
        },
        items: [
          {to: '/about-the-author', label: 'The Author', position: 'left'},
          {to: '/story', label: 'Story', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Ecosystem',
          },
          {to: '/lab-notes', label: 'Lab Notes', position: 'left'},
          {to: '/faqs', label: 'FAQs', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/itsdeannat/beyond-the-docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Beyond the Docs',
            items: [
              {
                label: 'Building',
                to: '/docs/category/building',
              },
              {
                label: 'Documenting',
                to: '/docs/category/documenting',
              },
              {
                label: 'Reflecting',
                to: '/docs/category/reflecting',
              },
            ],
          },
          {
            title: 'Explore',
            items: [
              {
                label: 'Story',
                href: '/story',
              },
              {
                label: 'Personal Website',
                href: 'https://deanna.dev',
              },
              // {
              //   label: 'X',
              //   href: 'https://x.com/docusaurus',
              // },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/in/thompsdc',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/itsdeannat/beyond-the-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Deanna Thompson. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
