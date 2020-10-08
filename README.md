# Compliance gaming starter

## Setup
1. Clone this repo: `git clone https://github.com/nmnj90/compliance-test.git`
2. Make sure you have [Node and NPM](https://nodejs.org/en/) installed on your machine. (Installing Node should also install NPM, automatically)
3. In the project's root, run `npm install` to install the dependencies.

## Usage
There are two commands you can run:
  * `npm run build-css`: runs the basic node-sass compilation task.
  * `npm run watch-css`: runs a "watch" task, that will watch your Sass files for changes, and upon detecting a change, will automatically run the `build-css` task to re-compile your Sass.

You can run either of these commands by typing `npm run COMMAND_NAME` on the command line. For instance, to run the "build" task, you would type `npm run build-css`. To run the "watch" task, you would type `npm run watch-css`.

### Notes on the commands
#### The `build-css` task
The `build-css` task "builds" or "compiles" your Sass source files into CSS. The task is written as such: `node-sass src/scss/ -o dist/css`. Let's break this down a bit:
  * The first part, `node-sass`, tells your computer to use the node-sass Node module to do something.
  * The second part, `src/scss`, is an "input" or "source" directory that tells node-sass where to get its Sass files from. You'll notice in this repository's directory structure, we have a `src` directory, with a `scss` directory inside, and inside of that are our Sass files. This is commonly called a "source" directory or folder.
  * The third part, `-o`, is a "flag" or "option" that gets passed to node-sass to help direct it. In this case, `-o` stands for "output" - or "where do we want to send our compiled Sass to?", and the place or "value" for that "output" will be the fourth part, which is explained next.
  * The fourth part, `dist/css`, is an "output" or "distribution" directory that tells node-sass where to send its compiled Sass files - the CSS files that our browser will read. The `dist/css` directory does not and will not exist until you run one of the two commands for the first time.

#### The `watch-css` task
The `watch-css` task "watches" your Sass source files for changes. When you make a change and save those changes, the `watch-css` task will automatically re-compile your Sass.

What's really happening here is that `watch-css` is simply re-running the `build-css` task any time it detects a change to one of your source files. If you didn't have this watch task, you'd have to run `npm run build-css` every time you wanted to recompile your Sass, which would be quite inconvenient.

We're using a Node module called [nodemon](https://github.com/remy/nodemon) to help us monitor our project for changes. When nodemon detects a change, it runs `npm run build-css` for you, instead of you having to worry about re-running that command for every change you make.
