---
title: "Ubuntuでnpm,nodeをインストールしたらエラーが出た"
date: "2020-12-10"
---

##グローバルインストールのためのディレクトリを作成する

>`mkdir ~/.npm-global`

##新しいディレクトリを使う設定をnpmで行う 

>`npm config set prefix '~/.npm-global'`

##～/.profileを作成し，以下の行を追加する

>`export PATH=~/.npm-global/bin:$PATH`

##変更を反映する 

>`source ~/.profile`

