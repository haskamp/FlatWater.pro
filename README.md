# Flatwater.pro

THE PLATFORM APP TO LEARN KITESURFING: 
Find your kitesurfing instructor today and train, ride and developed together. 

It’s the ultimate tool to help you level up your riding, it’s never been easier to learn kitesurfing and expand your horizons. You can search for instructors, spots and customised lessons all in one app.

## Getting started

**Run the development server:**

```bash
npm run dev
```

**Run storybook:**

```shell
npm run storybook
```


## Atomic design

We use atomic design. You can read more about our decision in the
[documentation](./docs/ATOMIC_DESIGN.md).

## Behavior Driven Development

We use behavior tests. You can read more about our decision in the
[documentation](./docs/BEHAVIOR_DRIVEN_DEVELOPMENT.md).

## Test Driven Development

We jest to write unit tests. Please look at the Documentation for [Jest](https://jestjs.io/)
and [testing-library](https://testing-library.com/docs/react-testing-library/intro/).

## Commitlint

We use commitlint to ensure conventional commit messages. You can read more about our decision in
the [documentation](./docs/COMMITS.md).


## Commands

**Run the development server:**

```bash
npm run dev
```

**Build:**

```shell
npm run build
```

**Run storybook:**

```shell
npm run storybook
```

**Build storybook:**

```shell
npm run storybook:build
```

**Run e2e tests:**

```shell
npm run cypress # local without server
# npm run cypress:run # headless
# npm run test:e2e # with server
```

**Run unit tests:**

```shell
npm run jest
# npm run jest:watch # watch
# npm run test:unit # same as "npm run jest"
```

**Run all tests:**

```shell
npm run test
```

**Run stylelint**

```shell
npm run stylelint
```

**Run eslint**

```shell
npm run eslint
```

**Run all linters**

```shell
npm run lint
```

## Skipping linters

If you need to skip a linter you can add the `--no-verify` flag.

> Warning! We strongly advise against skipping linters.

```shell
# Skipping commitlint
git commit README.md -m "this is a dirty commit" --no-verify
# Skipping linters
git push --no-verify
```
