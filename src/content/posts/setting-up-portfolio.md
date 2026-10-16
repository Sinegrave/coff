---
title: "Communication Privacy Management"
date: "2019-01-28"
description: "An overview of Communication Privacy Management Theory"
author: "Afi Belgrave"
tags:
  - "Communication Theory"
  - "Communication"
  - "CPM"
---

# Communication Privacy Management

## 1. Introduction

The Communication Privacy Management theory was developed by communications researcher Sandra Petronio in the early 1990s and originated as a way to examine the boundaries
of disclosure within marriage. Over time, the theory evolved into a macrotheory which can be applied to any number of groups, social structures, and/or personal relationships. The
communication privacy management theory, often shortened to CPM, can be assigned to the interpretive tradition of communication studies as the base structure of the theory is steeped in the idea that free-will is governing and our choices are our own.

CPM attempts to examine the barrier between our inner selves and our outer world hrough our choice to disclose information about ourselves of varying import. When sharing
about ourselves, we make a conscious choice to do so. We choose to tell our Uber driver about our hectic day. We choose to our co-workers about our thoughts on our less than favorable boss. In believing that humans have free-will and control over our lives, the choices we make are
assumed to be entirely our own. With this assumption in mind, CPM attempts to analyze why we make the choices we do when it comes to personal and intimate disclosure about ourselves and
our thoughts. It sees every interaction as an opportunity for disclosure while also acknowledging the risks and benefits of said disclosure. Sharing too much with the wrong person can have social repercussions while sharing with the right person can strengthen relationships and build credibility. The theory assigns names to a number of aspects of socializing and believes that privacy comes with a set of inherent rules.

## 2. In Fiction, “All Those Parties We Didn’t Cry At”

“All Those Parties We Didn’t Cry At” is a short work of interactive fiction created by
cultural studies scholar and science fiction/fantasy author Natalia Theodoridou. Her short story
describes a world where no one is able to cry; whether this is caused by supernatural causes or
something man-made is not explained. In the story, the protagonist is prompted by a friend to
share the last time she cried.

> 'I was 12,’ Hayley says. ‘My dog had died. His name was Rusty.’ She closes her eyes. The underskin moist, smoky. ‘What children we were, back then, eh? I bawled for two days straight.’ 
>
> She sniffles. It all sounds a bit rehearsed. 
> 
> ‘You?’

In this interaction, we see the character, Hayley, openly disclosing information about her
past that may otherwise be considered personal or private information. Because Hayley is the
owner of this information, she is able to decide who she discloses this information to, and who
she does not. In response, the narrator is reluctant to share her own private information and
ultimately finds ways to avoid disclosing the truth.

> ‘I don't remember,’ I lie.
> She looks at me sharply. ‘Come on, be real.’
> ‘No, really," I say.
> ‘Whatever,’ she says, ‘suit yourself.’ She glances at her watch, fishes a tissue out of her sleeve and wipes her eyes. ‘I should get going anyhow,’

Next, install the project dependencies. This project uses `npm` (ensure you have Node.js >= 22.12.0 installed):

```bash
npm install
```

Once the dependencies are installed, you can start the local development server:

```bash
npm run dev
```

Your site should now be running at `http://localhost:4321`. Any changes you make will automatically hot-reload in the browser.

## 2. Global Configuration

The core configuration for your portfolio is centralized in the `src/config/site.ts` file. This is the very first file you should edit.

```typescript
// src/config/site.ts
export const SITE: SiteConfig = {
    website: "https://your-domain.com/",
    author: "Your Name",
    desc: "Your personal academic portfolio.",
    title: "Your Name",
    ogImage: "your-image.webp",
    postPerPage: 5,
    favicon: "/favicon.svg",
    lang: "en",
};
```

Make sure to update the `website`, `author`, `desc`, `title` fields to match your personal details. 

### Analytics configuration

If you want to track page views, you can configure Google Analytics 4 or Umami analytics right in the same file:

```typescript
export const ANALYTICS: AnalyticsConfig = {
    ga4Id: "G-XXXXXXXXXX", // Add your Google Analytics 4 Measurement ID
    umami: {
        websiteId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        src: "https://cloud.umami.is/script.js", 
    }
};
```
Analytics are lazy-loaded by default, ensuring they have zero impact on your Core Web Vitals!

## 3. Theming and Aesthetics

This template is built to look stunning right out of the box. We use a centralized theming engine, configured in `src/config/site.ts` and `src/config/themes.ts`.

In `site.ts`, you can toggle whether you want dark mode enabled, and choose your preferred light and dark themes:

```typescript
export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true, // Enable the moon/sun toggle
    themeLight: "light_notepad", 
    themeDark: "dark_notepad",
};
```

You can preview all the available color palettes by visiting the built-in Developer Tools at `http://localhost:4321/dev-tools` while your local server is running! If you wish to create your own color scheme, simply add a new entry to `THEMES` in `src/config/themes.ts`.

## 4. Managing Content

Your portfolio is fully driven by Markdown (`.md`) files. This makes it extremely easy to version control your content and write freely. All of your collections are located in `src/content/`.

Here are the primary collections you'll work with:
- **`posts/`**: Your blog posts (like this one!).
- **`projects/`**: Showcase your software, hardware, or research projects.
- **`publications/`**: List your academic papers. 
- **`talks/`**: Archive your conference presentations and slides.
- **`teaching/`**: List the courses you teach or have taught.

### Disabling Pages

If you don't want to use all the content collections provided by default, you can disable them in `src/config/pages.ts`.

For example, if you don't want to use the `talks` collection, you can set the following in `src/config/pages.ts`:

```typescript
export const PAGES: PagesConfig = {
    // Default configuration for pages, you can override any property of the objects
    talks: {
        title: "Talks & Presentations", // Title for the page
        subtitle: "Public lectures, colloquia, and conference presentations.", // Subtitle for the page
        isActive: false, // Enable the talks collection
    },
    ...
};
```
This configuration will disable the talks page in the navigation bar and the content collection.

### Writing a new post

To create a new post, just add a new `.md` file inside the `src/content/posts` directory. You have a md example for every collection on `src/example_contents/`. Here's what the frontmatter should look like and the possible values for each field:

```yaml
---
title: "My New Research Idea"
date: "2026-05-01"
description: "A brief exploration of a novel concept."
author: "Your Name"
tags:
  - "Research"
  - "Theory"
---
```

You can even use $\LaTeX$ math equations inside your markdown files out-of-the-box, powered by KaTeX!

$$ E = mc^2 $$

## 5. Navigation and Social Links

If you want to add or remove links in the navigation bar, or update your social media icons in the left sidebar, head over to:

- `src/config/navigation.ts`: Controls the top navigation bar.
- `src/config/social.ts`: Controls the icons in your left profile sidebar.

## 6. Building and Deploying

Once you're happy with your content and configuration, you can build the site for production:

```bash
npm run build
```

This will generate a highly optimized set of static HTML files in the `dist/` directory. You can host this directory on GitHub Pages, Vercel, Netlify, or any other static hosting provider of your choice.

---

That's it! You are now ready to start publishing your academic journey to the world.
