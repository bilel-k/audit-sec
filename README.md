<div align="center">

# 🛡️ Rapport d'Audit Sécurité

**Hackathon Cybersécurité — Juin 2025**

*Défense en profondeur d'un réseau IT fictif*

![OPNsense](https://img.shields.io/badge/OPNsense-D94F00?style=for-the-badge&logoColor=white)
![Wazuh](https://img.shields.io/badge/Wazuh-005571?style=for-the-badge&logoColor=white)
![Kali Linux](https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![OpenVPN](https://img.shields.io/badge/OpenVPN-EA7E20?style=for-the-badge&logo=openvpn&logoColor=white)

![Typst](https://img.shields.io/badge/Typst-239DAD?style=for-the-badge&logo=typst&logoColor=white)
![PDF](https://img.shields.io/badge/PDF-disponible-CC0000?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)
![Status](https://img.shields.io/badge/Statut-Terminé_✓-27ae60?style=for-the-badge)
![Vulns](https://img.shields.io/badge/Vulnérabilités_corrigées->90%25-27ae60?style=for-the-badge)

</div>

---

## 📋 Présentation

Ce dépôt contient la documentation complète du projet de cybersécurité réalisé lors d'un hackathon du **10 au 26 juin 2025**, avec présentation finale le **27 juin**.

L'objectif : concevoir, déployer et auditer une infrastructure réseau fictive en appliquant les principes de **défense en profondeur** avec des outils open source.

| | Résultat |
|---|---|
| 🏗️ Infrastructure | Déployée et fonctionnelle |
| 🔍 Vulnérabilités | >90 % corrigées après audit |
| 📡 Supervision | Temps réel opérationnelle (Wazuh) |
| 🔴 Attaques simulées | 100 % détectées |
| 🔐 VPN | Accès sécurisé validé |

---

## 🏗️ Architecture réseau

```
              ┌──────────────────────────────────────────┐
   WAN        │   🔥 OPNsense Firewall (192.168.10.254)   │
 10.40.10.x ──┤   IDS/IPS Suricata · NAT · VPN OpenVPN   │
              └──────────────────┬───────────────────────┘
                                 │ LAN 192.168.10.0/24
           ┌─────────────────────┼──────────────────────┐
           │                     │                      │
  ┌────────▼──────┐   ┌──────────▼──────┐   ┌──────────▼──────┐
  │🐧 Ubuntu Hard. │   │ 📊 Wazuh Manager│   │ 🐉 Kali Linux   │
  │ 192.168.10.10 │   │  192.168.10.20  │   │  192.168.10.50  │
  │ Serveur cible │   │  IDS / SIEM     │   │  Red Team       │
  │ UFW · Fail2Ban│   │  Dashboard :443 │   │  Nessus · Exegol│
  └───────────────┘   └─────────────────┘   └─────────────────┘
                                                      │
                                         ┌────────────▼──────┐
                                         │ 🔐 Client VPN      │
                                         │ 192.168.10.60 (VPN)│
                                         └───────────────────┘
```

### Plan d'adressage

| Hôte | Rôle | IP | Interface VMware |
|------|------|----|-----------------|
| 🔥 OPNsense | Firewall & VPN | `192.168.10.254` | VMnet1 + Bridged |
| 🐧 Ubuntu Hardened | Serveur cible sécurisé | `192.168.10.10` | VMnet1 + NAT |
| 📊 Wazuh Manager | IDS / SIEM | `192.168.10.20` | VMnet1 + NAT |
| 🐉 Kali Linux | Red Team + Nessus | `192.168.10.50` | VMnet1 + Bridged |
| 🔐 Client VPN Ubuntu | Accès distant VPN | `192.168.10.60` | NAT + tunnel |

---

## 🔧 Stack technique

<div align="center">

### Défense

![OPNsense](https://img.shields.io/badge/OPNsense-Firewall_&_VPN-D94F00?style=flat-square&logoColor=white)
![Wazuh](https://img.shields.io/badge/Wazuh-SIEM_/_IDS-005571?style=flat-square&logoColor=white)
![Fail2Ban](https://img.shields.io/badge/Fail2Ban-Brute--Force_Protection-CC0000?style=flat-square&logoColor=white)
![UFW](https://img.shields.io/badge/UFW-Pare--feu_Linux-E95420?style=flat-square&logo=ubuntu&logoColor=white)
![OpenVPN](https://img.shields.io/badge/OpenVPN-Accès_distant-EA7E20?style=flat-square&logo=openvpn&logoColor=white)
![Suricata](https://img.shields.io/badge/Suricata-IDS_/_IPS-FF6600?style=flat-square&logoColor=white)

### Offensive / Audit

![Nessus](https://img.shields.io/badge/Nessus-Scanner_CVE-00C176?style=flat-square&logoColor=white)
![Exegol](https://img.shields.io/badge/Exegol-Red_Team-1a1a2e?style=flat-square&logoColor=white)
![Hydra](https://img.shields.io/badge/Hydra-Brute--Force_SSH-8B0000?style=flat-square&logoColor=white)
![Nmap](https://img.shields.io/badge/Nmap-Scan_réseau-4479A1?style=flat-square&logoColor=white)
![Kali Linux](https://img.shields.io/badge/Kali_Linux-557C94?style=flat-square&logo=kali-linux&logoColor=white)

### Infrastructure

![VMware](https://img.shields.io/badge/VMware_Workstation-607078?style=flat-square&logo=vmware&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=ubuntu&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

</div>

| Outil | Rôle |
|-------|------|
| **OPNsense** | Pare-feu, NAT, règles réseau, tunnel OpenVPN, IDS Suricata |
| **Wazuh** | SIEM / IDS — collecte de logs, alertes temps réel, dashboard |
| **Fail2Ban** | Bannissement automatique après brute-force SSH |
| **Nessus** | Scanner de vulnérabilités (Tenable) |
| **Exegol** | Framework Red Team basé sur Docker |
| **OpenVPN** | Accès distance sécurisé par certificat |
| **UFW** | Pare-feu applicatif Linux |
| **Hydra** | Test de brute-force (simulation d'attaque) |
| **Nmap** | Découverte réseau et détection de services |

---

## 📁 Contenu du dépôt

```
audit-sec/
├── 📄 rapport-audit-securite.typ   # Source Typst (document principal)
├── 📕 rapport-audit-securite.pdf   # Rapport compilé (~430 Ko)
└── 📖 README.md                    # Ce fichier
```

### Compiler le rapport

Le rapport est rédigé en [Typst](https://typst.app/) — alternative moderne à LaTeX.

```bash
# Installer Typst (Linux)
curl -fsSL https://typst.app/docs/install | sh

# Compiler en PDF
typst compile rapport-audit-securite.typ

# Mode watch (rechargement automatique)
typst watch rapport-audit-securite.typ
```

---

## 🔍 Vulnérabilités identifiées

### 🐧 Ubuntu Hardened (`192.168.10.10`)

| Sévérité | Vulnérabilité | CVE |
|----------|--------------|-----|
| ![CRITIQUE](https://img.shields.io/badge/CRITIQUE-8e0000?style=flat-square) | OpenSSH Privilege Escalation | `CVE-2023-2650` |
| ![ÉLEVÉ](https://img.shields.io/badge/ÉLEVÉ-c0392b?style=flat-square) | OpenSSL Multiple Vulnerabilities | `CVE-2023-0464` |
| ![ÉLEVÉ](https://img.shields.io/badge/ÉLEVÉ-c0392b?style=flat-square) | OpenSSL Timing Side Channel | `CVE-2023-0465` |
| ![MOYEN](https://img.shields.io/badge/MOYEN-e67e22?style=flat-square) | SSL Medium Strength Cipher Suites | `CVE-2000-1200` |
| ![MOYEN](https://img.shields.io/badge/MOYEN-e67e22?style=flat-square) | SSL Certificate Signature Weak | `CVE-2018-0734` |
| ![BAS](https://img.shields.io/badge/BAS-2980b9?style=flat-square) | ICMP Timestamp / TCP Timestamps | — |

### 📊 Wazuh Manager (`192.168.10.20`)

| Sévérité | Vulnérabilité | CVE |
|----------|--------------|-----|
| ![CRITIQUE](https://img.shields.io/badge/CRITIQUE-8e0000?style=flat-square) | Apache HTTP/2 DoS — Rapid Reset Attack | `CVE-2023-44487` |
| ![CRITIQUE](https://img.shields.io/badge/CRITIQUE-8e0000?style=flat-square) | Apache HTTP Server 2.4 < 2.4.57 | `CVE-2023-25690` |
| ![ÉLEVÉ](https://img.shields.io/badge/ÉLEVÉ-c0392b?style=flat-square) | Apache 2.4.7 < 2.4.57 Multi-Vuln | `CVE-2023-25690` |
| ![MOYEN](https://img.shields.io/badge/MOYEN-e67e22?style=flat-square) | TLS 1.0 / 1.1 détectés | — |
| ![MOYEN](https://img.shields.io/badge/MOYEN-e67e22?style=flat-square) | SSL Cipher suites faibles | — |
| ![BAS](https://img.shields.io/badge/BAS-2980b9?style=flat-square) | SSH Weak MAC / CBC Mode | — |

> **11 vulnérabilités détectées — >90 % corrigées après hardening.**

---

## 🛡️ Hardening appliqué

<details>
<summary><b>🐧 Système Ubuntu Hardened</b></summary>

```bash
# Mises à jour automatiques
sudo apt install unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades

# Durcissement noyau
cat << 'EOF' | sudo tee /etc/sysctl.d/99-hardening.conf
net.ipv4.ip_forward = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.rp_filter = 1
EOF
sudo sysctl --system

# AppArmor
sudo systemctl enable --now apparmor
```
</details>

<details>
<summary><b>🔑 SSH — Configuration sécurisée</b></summary>

```text
PermitRootLogin no
PasswordAuthentication no
MACs hmac-sha2-256,hmac-sha2-512
Ciphers aes256-ctr,aes192-ctr,aes128-ctr
```
</details>

<details>
<summary><b>🔥 UFW — Pare-feu applicatif</b></summary>

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw enable && sudo ufw status verbose
```
</details>

<details>
<summary><b>🚫 Fail2Ban — Anti brute-force</b></summary>

```ini
[sshd]
enabled  = true
port     = 22
maxretry = 3
bantime  = 600
```
</details>

---

## 🚨 Attaques simulées & détection

| Attaque | Outil | Détecté par | Résultat |
|---------|-------|-------------|---------|
| Brute-force SSH | ![Hydra](https://img.shields.io/badge/Hydra-8B0000?style=flat-square) | Wazuh + Fail2Ban | ✅ Banni après 3 tentatives |
| Scan réseau | ![Nmap](https://img.shields.io/badge/Nmap-4479A1?style=flat-square) | Suricata (OPNsense) | ✅ Alerte générée |
| Ping flood | ![hping3](https://img.shields.io/badge/hping3-555?style=flat-square) | Suricata | ✅ Détecté |
| Scan vulnérabilités | ![Nessus](https://img.shields.io/badge/Nessus-00C176?style=flat-square) | — | ✅ 11 CVE rapportées |
| Red Team | ![Exegol](https://img.shields.io/badge/Exegol-1a1a2e?style=flat-square) | Wazuh | ✅ Traces journalisées |

---

## 📅 Planning

```
Juin 2025
──────────────────────────────────────────────────────────
10──────15  🏗️  Déploiement & réseau (VMs, IPs, connectivité)
       16───18  🔥  Pare-feu & IDS (OPNsense, Wazuh, agents)
           19──────24  🔴  Attaques & hardening (Nessus, Hydra, correctifs)
              20─────────26  📝  Analyse & documentation
                       25────27  🎤  Finalisation & présentation
──────────────────────────────────────────────────────────
```

---

## 📚 Documentation officielle

[![Wazuh](https://img.shields.io/badge/Wazuh_Docs-005571?style=flat-square&logoColor=white)](https://documentation.wazuh.com/current/installation-guide/)
[![OPNsense](https://img.shields.io/badge/OPNsense_Docs-D94F00?style=flat-square&logoColor=white)](https://docs.opnsense.org/)
[![Docker](https://img.shields.io/badge/Docker_Docs-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docs.docker.com/engine/install/)
[![Exegol](https://img.shields.io/badge/Exegol_Docs-1a1a2e?style=flat-square&logoColor=white)](https://docs.exegol.com/first-install)
[![Nessus](https://img.shields.io/badge/Nessus_Downloads-00C176?style=flat-square&logoColor=white)](https://www.tenable.com/downloads/nessus)
[![OpenVPN](https://img.shields.io/badge/OpenVPN_Community-EA7E20?style=flat-square&logo=openvpn&logoColor=white)](https://community.openvpn.net/)

---

<div align="center">
  <sub>Hackathon Cybersécurité · 10–27 juin 2025 · Confidentiel</sub>
</div>
