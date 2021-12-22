# Timer
  
Let Aha! manage your time tracking data. This extension allows you to start a timer for any record you're working on. The time will be logged to the record when the timer is stopped.

It provides these contributions:

* Timer field: Start and stop the timer for a record
* Global timer bar: See all active timers

## Screenshot

![demo](res/timer-demo.png)

## Installing the extension

**Note: In order to install an extension into your Aha! Develop account, you must be an account administrator.**

<!-- TODO: Fill in a link to your built extension package
Install the Timer extension by clicking [here](https://secure.aha.io/settings/account/extensions/install?url=). -->

This extension is not quite ready yet. Grab the development version by following the instructions below.

## Working on the extension

Install [`aha-cli`](https://github.com/aha-app/aha-cli):

```sh
npm install -g aha-cli
```

Clone the repo:

TODO: Add the repository URL here
```sh
git clone ...
```

**Note: In order to install an extension into your Aha! Develop account, you must be an account administrator.**

Install the extension into Aha! and set up a watcher:

```sh
aha extension:install
aha extension:watch
```

Now, any change you make inside your working copy will automatically take effect in your Aha! account.

## Building

When you have finished working on your extension, package it into a `.gz` file so that others can install it:

```sh
aha extension:build
```

After building, you can upload the `.gz` file to a publicly accessible URL, such as a GitHub release, so that others can install it using that URL.

To learn more about developing Aha! Develop extensions, including the API reference, the full documentation is located here: [Aha! Develop Extension API](https://www.aha.io/support/develop/extensions)
