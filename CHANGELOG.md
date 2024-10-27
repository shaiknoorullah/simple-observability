# 1.0.0 (2024-10-27)


### Bug Fixes

* **ci.yml:** fixed - Invalid workflow file error in github actions ([1b37ee9](https://github.com/shaiknoorullah/simple-observability/commit/1b37ee9254207882b69727361c802843ea118525)), closes [.github/workflows/ci.yml#L54](https://github.com/.github/workflows/ci.yml/issues/L54)
* **ci.yml:** fixed using pnpm instead of npm ([331a22b](https://github.com/shaiknoorullah/simple-observability/commit/331a22bddfd05ed35245f3c7a9f2ac5e014d895d))
* fix import resolution issues for ts-node, fix loader issues with tsconfig ([1b1ffa5](https://github.com/shaiknoorullah/simple-observability/commit/1b1ffa532bbf2fe933813cc5240f013f0c7e1420))
* fixed some formatting issues in README.md ([4f93718](https://github.com/shaiknoorullah/simple-observability/commit/4f93718f69b2693d9641da4be6ef194bbe73bdcc))
* fixed the same issue with release workflow (forgot to change npm to pnpm in Install dependencie ([7abc84d](https://github.com/shaiknoorullah/simple-observability/commit/7abc84df72f310aac66bc133ec1ccf9ae3a13914))
* fixed the script name being called in ci.yml from semantic-release to release ([a4b3d5a](https://github.com/shaiknoorullah/simple-observability/commit/a4b3d5a9495c61969b63a81f9d2b20af4ef775dd))
* **package:** add missing dependency `sinon-chai` ([d119cd6](https://github.com/shaiknoorullah/simple-observability/commit/d119cd66b4e11d57c6c4876ae4f9fd96dd1530d3))
* remove `noEmit` property from tsconfig because of errors in release workflow ([6d2dd2b](https://github.com/shaiknoorullah/simple-observability/commit/6d2dd2b2cbaea4ff957f0b68dd127ec519b76921))
* **tsconfig.test:** add tsconfig for test config, ignore tsup.config.ts from eslintrc add node types ([f7a8cf2](https://github.com/shaiknoorullah/simple-observability/commit/f7a8cf2f2c2d12de9929e245498d5572cfd35719))

# Changelog

All notable changes to this project will be documented in this file.
