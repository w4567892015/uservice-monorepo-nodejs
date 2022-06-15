uService Monorepo Example
=================

This repository contains all of the uService's packages and apps. ONE for ALL!

Install
=======
```bash
$ yarn
```

## Build

### Build docker image

```bash
$ yarn build:docker <app_name>
```

### Re-initialize installation

```bash
$ yarn install:clean
```

This is very useful when you pull the latest version of uService and it is not work.

Development
===========

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Package Management
------------------

### Add packages to workspace

```bash
$ lerna add <pkg_name> --scope=<workspace_name>
```

## Add development packages for this monorepo

```bash
$ yarn add -WD <pkg_name>
```

## Add packages for service

```bash
$ yarn add <pkg_name> --scope=<workspace_name>
```

### Remove package from service

```bash
$ yarn workspace <workspace_name> remove <pkg_name>
```

Branch
------

We follow the git flow.

- feature/<service_name>/<desc>
- refactor/<service_name>/<desc>
- hotfix/<service_name>/<desc>
- fix/<service_name>/<desc>
- support/<service_name>/<desc>
- release/<service_name>/<desc>

**Please always create PR to merge changes to dev branch**

Commit Message
--------------

**.gitmessage**

```
<type>(<scope>): <subject>

# example for commit
# ```
# fix(middleware): ensure Range headers adhere more closely to RFC 2616
# some thing I need more description
# Fixes #2310
# ```

# Allow <type> values:
# - feat (new feature for the user, not a new feature for build script)
# - fix (bug fix for the user, not a fix to a build script)
# - docs (changes to the documentation)
# - style (formatting, missing semi colons, etc; no production code change)
# - refactor (refactoring production code, eg. renaming a variable)
# - test (adding missing tests, refactoring tests; no production code change)
# - chore (updating grunt tasks etc; no production code change)

# Example for <scope>:
# - init
# - runner
# - watcher
# - config
# - web-server
# - proxy
# - etc.

# Message body
# - uses the imperative, present tense: “change” not “changed” nor “changes”
# - includes motivation for the change and contrasts with previous behavior

# Footer message
# Closed issues should be listed on a separate line in the footer prefixed with "Closes" keyword like this:
# ```js
# Closes #234
# Closes #123, #245, #992 // in the case of multiple issues:
# ```
```
