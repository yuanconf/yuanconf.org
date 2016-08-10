# 元年會網站

推薦用 Mac 或是 Linux ， Windows 不曉得能不能完整的整合，如果有人有實驗精神，可以實驗一下然後幫助寫一下文件。

## 相依套件
1. Ruby > 1.9.0
2. git

## 安裝流程
1. git clone git@github.com:yuanconf/yuanconf.org.git 
2. cd yuanconf.org/
2. git checkout source
3. gem install bundle
4. bundle install
5. rake setup_github_pages
6. git checkout _config.yml
7. cd _deploy
8. git fetch --all
9. git reset --hard origin/gh-pages
10. cd ..

## 指令小抄

* rake new_post["post name"] //  **新增文章** //
* rake generate      //  **更動更新** //
* rake preview		// **開啟預覽** //
* rake deploy			// **將確定的更新上線** //

## 注意
* 所有的更動請在 source 資料夾下進行
* 文件編寫格式使用 [markdown](http://markdown.tw)
* 請在草稿完成之前都在文章前面加上 **published:false**
* 更動完畢以後請一定要重新 generate 檔案
* 請一定要 commit 你的更新狀態到 source branch

