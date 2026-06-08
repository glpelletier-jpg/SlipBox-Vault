---
title: Linux Cheat Sheet
id: 20260225081600
date: 2026-02-25
type: fleeting
tags: [fleeting, HowTo, computer, resource]
---

# Linux Cheat Sheet

---

date: 2025-12-05 07:51:22
created: 2025-12-05 07:50:37
categories:

- Computer Hardware

---

## Linux Cheat Sheet

See article at [https://dronebotworkshop.com/linux-workstation](https://dronebotworkshop.com/linux-workstation)
---Update Linux-------Run before installing software----
sudo apt updatesudo apt upgrade

---Remove Caps Lock-------Add to Startup Manager----
xmodmap -e "keycode 66 = Shift_L NoSymbol Shift_L"

---Install ChaseApp----
sudo snap install chaseapp

---Arduino IDE from Snap Store-------See article for manual installation details----
sudo snap install arduino
---Arduino IDE Download Move and change folder---Check version number of your IDE and change accordingly
sudo mv arduino-1.8.13 /optcd /opt/arduino-1.8.13
---Arduino IDE install---Check version number of your IDE and change accordingly
sudo ./install.sh
---Arduino IDE USB Port Fix-------Replace  with your username-------Verify that "dialout" is correct group----
sudo usermod -a -G dialout 

---Install Visual Studio Code-------Add Python3 Virtual Environment first----
sudo apt-get install python3-venvsudo snap install --classic code
---Install PyCharm Python Editor----
sudo snap install pycharm-community --classic

---Install Thonny IDE Python Editor----
bash <(wget -O - [https://thonny.org/installer-for-linux)](https://thonny.org/installer-for-linux))

---Install Geany Text Editor----
sudo apt-get install geany

---Install Meld file compare tool----
sudo apt-get install -y meld

---Install Balena Etcher USB & SD Card Burner----
echo "deb [https://deb.etcher.io](https://deb.etcher.io) stable etcher" | sudo tee /etc/apt/sources.list.d/balena-etcher.listsudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 379CE192D401AB61sudo apt updatesudo apt install balena-etcher-electron

---Install GitCola Git client----
sudo apt-get install git-cola

---Install FileZilla FTP----
sudo apt install filezilla

---Install XTerm terminal----
sudo apt-get install -y xterm

---Install Angry IP Scanner-------Download 64-bit DEB file and install with Ubuntu Installer----
[https://angryip.org/download/#linux](https://angryip.org/download/#linux)

---Install KiCad PCB Editor----
sudo add-apt-repository --yes ppa:kicad/kicad-5.1-releasessudo apt updatesudo apt install --install-recommends kicad

---Install EasyEDA PCB & Schematic Editor-------Download install program from [https://easyeda.com/page/download](https://easyeda.com/page/download)---Extract and open Terminal in extracted folder
sudo bash install.sh

---Install VLC Media Player----
sudo snap install vlc

---Install Shutter screen snapshot tool-------Optional Gnome Web Photo for web screenshots----
sudo add-apt-repository ppa:linuxuprising/shuttersudo apt updatesudo apt install shutter
sudo apt install gnome-web-photo

---Install Peek animated GIF recorder----
sudo add-apt-repository ppa:peek-developers/stablesudo apt updatesudo apt install peek


