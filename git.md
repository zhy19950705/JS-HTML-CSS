git版本   git version  
查看本地所有分支 git branch
查看所有远程分支 git branch -r
查看所有远程和本地分支 git branch -a
 git branch -d <branchname> # → 删除本地branchname分
 git branch -m brancholdname  branchnewname # → 重命名分支
 git branch <branchname> # → 创建branchname分支
 git checkout <branchname> # → 切换分支到branchname
 git checkout -b <branchname> # → 等同于执行上两步，即创建新的分支并切换到该分支
 git checkout -- xx/xx # → 回滚单个文件
 git pull origin master:master # → 将远程origin主机的master分支合并到当前master分支,冒号后面的部分表示当前本地所在的分支
 git push origin -d <branchname>   # → 删除远程branchname分支
 git fetch --p   # → 更新分支
 git status # → 查看仓库状态
 git add xx # → 把xx文件添加到暂存区去
 git commit -m ' '  # → 提交文件 -m 后面的是注释(不建议使用👎)
 git commit -am(-a -m) # → 提交所有的修改，等同于上两步(不建议使用👎)
 git commit ./xx   # → 等同于git add ./xx + git commit（建议使用👍）
 git commit --amend # → 将暂存区和当前commit合并创建一个新commit去替换当前commit
 git stash # → 把当前的工作隐藏起来 等以后恢复现场后继续工作
 git fetch --all  # → 将远程主机的更新全部取回本地
 git merge origin/master  # → 在本地（当前）分支上合并远程分支
 git merge --abort  # → 终止本次merge，并回到merge前的状态（👍）
 git pull origin master  # → 从远程获取最新版本并merge到本地等同于
 git fetch origin master +  git merge origin/master（前者更安全一些）
 git push origin master   # → 将本地master分支推送到远程origin主机的master分支
 git log xx  # → 查看xx文件的commit记录 git log -p xx   # → 查看xx文件每次提交的diff
 git log --pretty=oneline xx  # → 查看xx文件提交的历史记录（只显示哈希值和提交说明）
 git log --pretty=raw  # → 查看commit之间的父子关系（root commit是没有父提交的）
 git log --graph  # → 查看当前分支commit生成的树状图
 git diff HEAD HEAD^1 -- xx  # → 查看xx文件不同版本之间的差异
 git diff HEAD~1  # → 显示父节点的提交



