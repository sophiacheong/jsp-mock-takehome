# Company X THCC Setup

Congratulations on moving forward with your interview process at Company X! We want your THCC to go smoothly. Instead of starting from scratch, following are some bullet points to help you get a blank canvas ready. When the clock starts on your project, you should be able to start coding.

## 1. Fork this repo then clone the forked repo locally

## 2. Create a branch for your project

All work for the project should be done on a branch named `project`, and after completing your project, you'll create a pull request to merge to `main`.

## 3. Seed your project

Set up a working npm/yarn project in a subdirectory named `project`. You'll be building a very small single-page app, so optimize for that. If you're building a React app, we highly recommend `create-react-app` to make things really easy. You’re welcome to use any other boilerplate/tool or your own, but create-react-app makes it quick and easy to seed a working React project. If you're using something other than React (Vue, Angular, Svelte, etc.), use whatever boilerplate/tool is most appropriate. Nothing fancy should be required!

Whatever you pick, make sure that `npm run build` will build a _static_ site out to a `build` directory (inside the `project` directory you've created). `create-react-app`, for example, will do this out of the box.

To illustrate, if you're using create-react-app, from within the cloned repo directory:

```bash
npx create-react-app project
```

Or if you're using `yarn`:

```bash
yarn create react-app project
```

Other libraries/frameworks will likely have a similar command that takes a directory name and creates a skeleton project in that directory. Follow the particular library/framework instructions in that case.

If you want to verify it's building correctly (especially if you're using something other than `create-react-app`), you can do this:

```bash
cd project 
npx serve -s build
```

Or with `yarn`:

```bash
cd project 
yarn add serve
yarn serve -s build
```

Some tools (like `vue-cli-service` for example) will use a different default output directory. Be sure to change the `build` script in `package.json` file if that's the case, to make sure it's writing to a directory named `build`. If you have to do that, you'll also want to add that directory to your `.gitignore`, so you don't commit the build files.

That will give you a link (like http://localhost:5000) that you can test your build locally. That's just to make sure we can build your project though, so during development, you'll likely do this (from within the `project` directory) instead:

```bash
npm start
```

Or

```bash
yarn start
```

## 4. Push your seed project

Push your seed project to your private repo to make sure everything is working.

## 5. Prepare your project

You'll have to wait until you start your project to see the actual project spec. For now, we can tell you: you'll build a simple app to render data from a simple REST API. You might need to manage a couple of "pages" in your app, but no complex routing will be required (i.e. the URL doesn't have to change). If you can `fetch` something and display it, you're probably prepared.

Feel free to add any npm modules that you need/want, like Lodash, Moment.js, or Axios, but again, the requirements will be modest, so nothing in particular is required. The following caveats apply:

- Avoid anything that prevents your app from being built statically. For example, you wouldn't want to install a CMS that requires a database to be running.
- Avoid anything that depends on an external API. For example, don't use Firebase.
- Avoid any pre-built components that implement features we might ask you to build. For example, avoid anything that presents a user, a list of products, etc.

Feel free to add any of your own code that you think might help you, including utility functions, components, etc. You will likely be asked to explain this code in a follow-up interview, so be sure to keep it simple and specific to this project. There's no need to spend any significant time preparing here!

You won't need to worry much about presentation. This means no particular CSS, fonts, or images are required for the project. Importing Material Design components, for example, is totally acceptable, but it won't improve your score. In fact, it might distract you from coding other things that will affect your score! We will be looking for a reasonable UX, but standard HTML markup has you covered there.

You won't be expected to write any unit tests.

## 6. Push your prepared app

Once you’re satisfied with your project setup, push your project again.

```bash
git add .
git commit -m "project ready"
git push origin project
```

---

**It is essential** to have the items above completed ahead of time. You need to have this setup complete before you start the skills interview so you can spend most of your available time coding instead of dealing with configuring the setup.

---

## 7. Get ready

Find a good spot to work with a reliable internet and a 2.5 hour block of time free of distractions so you can focus and do your best work.

If you use alternative input devices or other assistive technology, please let us know if you need additional time.