// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A comprehensive course on Physical AI and Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hackathon-ai-humanoid-robotic-book.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages: https://<username>.github.io/<repository>/
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'spec-driven-dev', // Usually your GitHub org/user name.
  projectName: 'hackathon-book', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    mermaid: false,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/spec-driven-dev/hackathon-book/edit/master/book/',
        },
        blog: false, // Disable blog if not needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Physical AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/spec-driven-dev/hackathon-book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Module 1: ROS 2',
      //           to: '/docs/module-1-ros2/ros2-nervous-system',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/spec-driven-dev/hackathon-book',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Course. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;