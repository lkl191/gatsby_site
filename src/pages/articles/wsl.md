---
title: "WSL2でimportとexport"
date: "2020-12-08"
---

##import


>`wsl --import [distribution_name] [path/to/install/dir] [file_name].tar --version 2`


##デフォルトユーザーの変更
>`Function WSL-SetDefaultUser ($distro, $user) { Get-ItemProperty Registry::HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Lxss\*\ DistributionName | Where-Object -Property DistributionName -eq $distro | Set-ItemProperty -Name DefaultUid -Value ((wsl -d $distro -u $user -e id -u) | Out-String); };`

>`WSL-SetDefaultUser <DistroName> <UserName>`

##export
>`wsl --export [distribution_name] [file_name].tar`