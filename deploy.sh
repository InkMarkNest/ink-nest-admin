#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件

pnpm run build

# 进入生成的文件夹

cd dist

git init
git add -A
git commit -m 'build ink nest admin to github'

git push -f git@github.com:InkMarkNest/ink-nest-admin.git main:docs
# git push -f git@github.com:你的git名/你的git项目名.git master:你的git分支

cd -

