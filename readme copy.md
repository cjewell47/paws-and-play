---
title: Angular Gulp Setup
type: lesson
duration: "1:00"
creator:
    name: Alex Chin
    city: London
competencies: Front-end MV*
---

# Angular Gulp Setup

### Objectives
*After this lesson, students will be able to:*

- Provide a tooling setup for this unit
- Walk through a more advanced `gulp` setup
- Prepare students for work after the course

### Preparation
*Before this lesson, students should already be able to:*

- Understand how to use Gulp
- Understand how to use Sass
- Understand how to write ES6

## How to require Angular (20 mins)

There are a number of different ways to get a copy of the Angular library.

- Using a CDN, e.g. [Google Hosted Libraries](https://developers.google.com/speed/libraries/)
- Using Bower

You should be familiar with why we might not want to link lots of separate JS files in our HTML though?

Ideally, we want to reduce the number of HTTP requests that we make when loading our websites.

So, how do we do this?

### Tooling

Front-end tooling is the process of automating, optimising, improving your workflow as a front-end developer by using build systems, bundlers, task runners and build scripts such as:

- [Grunt](http://gruntjs.com/)
- [Gulp](http://gulpjs.com/)
- [Brunch](http://brunch.io/)
- [Webpack 1.x](http://webpack.github.io/docs/)
- [Webpack 2.x](https://webpack.js.org/)
- npm scripts

Scaffolding/generator tools such as:

- [Yeoman](http://yeoman.io/)
- [Lineman](http://linemanjs.com/)

Dependency management tools such as:

- [Bower](https://bower.io/)
- [npm](https://www.npmjs.com/)
- [Browserify](http://browserify.org/)
- [ComponentJS](https://componentjs.com/)

## What setup should I use?

There are so many different tooling setups that people use in the industry that it's very difficult to know which configuration to use.

To make this a bit easier, we've decided to give you a tooling setup using Gulp to use for this unit.

### Why are we giving you a setup?

When you go into a company as a junior developer, it's likely that you won't have to setup the tooling process for your project. Therefore, this is good practise for when you go into your first role.

Also, we want you to **focus on learning Angular**. This unit is about understanding how to use a client-side framework, not about how to setup tooling. We hope that by providing you a decent tooling setup you will become familiar with it whilst focusing on learning Angular.

## We're going to use Gulp

We've decided to use Gulp for this setup because we have already done a bit of Gulp on this course.

Webpack 1.x or 2.x might have been another strong choice for this setup, however it's a bit more difficult to setup and we're already familiar with Gulp.

## What does this setup do?

> Send out the `starter-code`

This starter-code contains a Gulp, Bower and npm setup that we will use for this unit.

### Separate tasks

Instead of having one HUGE `gulpfile.js`, we've decided to split all of the tasks into separate files and put them in a `tasks` directory.

Most of the tasks move content from a `src` directory to a `public` directory.

This `public` directory is git-ignored using a `.gitignore` file that looks like this:

```
bower_components
node_modules
public
```

> **Note:** It is important to remember that copying files in the GUI will not move this hidden `.gitignore` file.

## Let's play with it

This Gulp setup does a lot of things.

The best thing to do would be for us to have a play with it...

Get started with:

```sh
$ bower install && npm install
```

> **Note:** Take a look at the app, making sure to point out:
>
> `default` task vs `deploy` task
>
> Both of these are similar, however the `deploy` task doesn't run the watch task or the serve task. The `deploy` task is designed to run as a `postinstall` script.
>
> The use of `gulpIf` to omit some pipes when the environment is not production.
>
> The use of separate pipes to 'build' a task.

When playing with the app:

- Add an `<h1>Hi</h1>` to the index.html
- Change the body background in `src/scss/style.scss`
- Make an error in an scss file
- Add some ES6 in the `src/js/app.js` file
- Add an image in the images folder and link to it on the index.html

## Using Angular

We can see in our `bower.json` file that Angular has already been installed.

In the next lesson, we're going to have a look at using it!

## Independent Practice (20 minutes)

> **Note:** _This can be a pair programming activity or done independently._

Take some time with the person next to you to read through the various tasks.

If you have questions, have a look on Google and then ask your instructor.

## Conclusion (5 mins)

We will be using this setup for the whole of this unit, so if you don't feel comfortable with it yet - you will be by the end of the project.

Remember, this is not the ONLY way to use Gulp with Angular - however it's quite a good setup to get started!
