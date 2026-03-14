# 🛡️ Rapport d'Audit Sécurité — Hackathon Cybersécurité 2025

> **Défense en profondeur d'un réseau IT fictif**  
> Hackathon du **10 au 26 juin 2025** · Présentation finale le **27 juin 2025**

---

## 📋 Présentation

Ce dépôt contient la documentation complète du projet de cybersécurité réalisé lors d'un hackathon.  
L'objectif : concevoir, déployer et auditer une infrastructure réseau fictive en appliquant les principes de **défense en profondeur** avec des outils open source.

### Résultats
- ✅ Infrastructure complète déployée et fonctionnelle
- ✅ >90 % des vulnérabilités identifiées corrigées
- ✅ Supervision temps réel opérationnelle (Wazuh)
- ✅ Attaques simulées détectées (brute-force, scans, DoS)
- ✅ Accès VPN sécurisé validé

---

## 🏗️ Architecture

```
              ┌─────────────────────────────────────────┐
   WAN        │  OPNsense Firewall (192.168.10.254)      │
 10.40.10.x ──┤  IDS/IPS Suricata · NAT · VPN OpenVPN   │
              └──────────────────┬──────────────────────┘
                                 │ LAN 192.168.10.0/24
           ┌─────────────────────┼──────────────────────┐
           │                     │                      │
  ┌────────▼──────┐   ┌──────────▼──────┐   ┌──────────▼──────┐
  │ Ubuntu Hardened│   │  Wazuh Manager  │   │   Kali Linux    │
  │ 192.168.10.10 │   │  192.168.10.20  │   │  192.168.10.50  │
  │ Serveur cible │   │  IDS / SIEM     │   │  Red Team       │
  │ UFW · Fail2Ban│   │  Dashboard :443 │   │  Nessus · Exegol│
  └───────────────┘   └─────────────────┘   └─────────────────┘
                                                      │
                                         ┌────────────▼──────┐
                                         │ Client VPN Ubuntu  │
                                         │ 192.168.10.60 (VPN)│
                                         └───────────────────┘
```

### Plan d'adressage

| Hôte | Rôle | IP | Interface VMware |
|------|------|----|-----------------|
| OPNsense | Firewall & VPN | 192.168.10.254 | VMnet1 + Bridged |
| Ubuntu Hardened | Serveur cible sécurisé | 192.168.10.10 | VMnet1 + NAT |
| Wazuh Manager | IDS / SIEM | 192.168.10.20 | VMnet1 + NAT |
| Kali Linux | Red Team + Nessus | 192.168.10.50 | VMnet1 + Bridged |
| Client VPN Ubuntu | Accès distant VPN | 192.168.10.60 | NAT + tunnel |

---

## 🔧 Stack technique

| Outil | Rôle |
|-------|------|
| **OPNsense** | Pare-feu, NAT, règles réseau, tunnel OpenVPN, IDS Suricata |
| **Wazuh** | SIEM / IDS — collecte de logs, alertes temps réel, dashboard |
| **Fail2Ban** | Bannissement automatique après brute-force SSH |
| **Nessus** | Scanner de vulnérabilités (Tenable) |
| **Exegol** | Framework Red Team basé sur Docker |
| **OpenVPN** | Accès distance sécurisé par certificat |
| **UFW** | Pare-feu applicatif Linux (Ubuntu Hardened) |
| **Hydra** | Test de brute-force (simulation d'attaque) |
| **Nmap** | Découverte réseau et détection de services |

---

## 📁 Contenu du dépôt

```
audit-sec/
├── rapport-audit-securite.typ   # Source Typst (document principal)
├── rapport-audit-securite.pdf   # Rapport compilé (PDF, ~430 Ko)
└── README.md                    # Ce fichier
```

### Compiler le rapport

Le rapport est rédigé en [Typst](https://typst.app/) — alternative moderne à LaTeX.

```bash
# Installer Typst (Linux)
curl -fsSL https://typst.app/docs/install | sh

# Compiler
typst compile rapport-audit-securite.typ

# Compilation en mode watch (rechargement automatique)
typst watch rapport-audit-securite.typ
```

---

## 🔍 Vulnérabilités identifiées

### Ubuntu Hardened (192.168.10.10)

| Sévérité | Vulnérabilité | CVE |
|----------|--------------|-----|
| 🔴 CRITIQUE | OpenSSH Privilege Escalation | CVE-2023-2650 |
| 🟠 ÉLEVÉ | OpenSSL Multiple Vulnerabilities | CVE-2023-0464 |
| 🟠 ÉLEVÉ | OpenSSL Timing Side Channel | CVE-2023-0465 |
| 🟡 MOYEN | SSL Medium Strength Cipher Suites | CVE-2000-1200 |
| 🟡 MOYEN | SSL Certificate Signature Weak | CVE-2018-0734 |
| 🔵 BAS | ICMP Timestamp / TCP Timestamps | — |

### Wazuh Manager (192.168.10.20)

| Sévérité | Vulnérabilité | CVE |
|----------|--------------|-----|
| 🔴 CRITIQUE | Apache HTTP/2 DoS — Rapid Reset | CVE-2023-44487 |
| 🔴 CRITIQUE | Apache HTTP Server 2.4 < 2.4.57 | CVE-2023-25690 |
| 🟠 ÉLEVÉ | Apache 2.4.7 < 2.4.57 Multi-Vuln | CVE-2023-25690 |
| 🟡 MOYEN | TLS 1.0 / 1.1 détectés | — |
| 🟡 MOYEN | SSL Cipher suites faibles | — |
| 🔵 BAS | SSH Weak MAC / CBC Mode | — |

> **11 vulnérabilités détectées au total — >90 % corrigées après hardening.**

---

## 🛠️ Hardening appliqué

### Système (Ubuntu Hardened)
```bash
# Mises à jour automatiques
sudo apt install unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades

# Durcissement noyau
echo "net.ipv4.ip_forward = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.rp_filter = 1" | sudo tee /etc/sysctl.d/99-hardening.conf
sudo sysctl --system

# AppArmor
sudo systemctl enable --now apparmor
```

### SSH
```text
PermitRootLogin no
PasswordAuthentication no
MACs hmac-sha2-256,hmac-sha2-512
Ciphers aes256-ctr,aes192-ctr,aes128-ctr
```

### UFW
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw enable
```

### Fail2Ban (`/etc/fail2ban/jail.local`)
```ini
[sshd]
enabled  = true
port     = 22
maxretry = 3
bantime  = 600
```

---

## 🚨 Attaques simulées & détection

| Attaque | Outil | Détecté par | Résultat |
|---------|-------|-------------|---------|
| Brute-force SSH | Hydra | Wazuh + Fail2Ban | ✅ Banni après 3 tentatives |
| Scan réseau | Nmap `-sS -A` | Suricata (OPNsense) | ✅ Alerte générée |
| Ping flood | hping3 | Suricata | ✅ Détecté |
| Scan vulnérabilités | Nessus | — | ✅ 11 CVE rapportées |
| Red Team | Exegol | Wazuh | ✅ Traces journalisées |

---

## 📅 Planning

| Phase | Dates | Objectif |
|-------|-------|----------|
| Déploiement & réseau | 10 – 16 juin | VMs, IPs, connectivité |
| Pare-feu & IDS | 16 – 18 juin | OPNsense, Wazuh, agents |
| Attaques & hardening | 19 – 24 juin | Nessus, Hydra, corrections |
| Analyse & documentation | 20 – 26 juin | Rapport, captures, scripts |
| Répétition & finalisation | 25 – 27 juin | Présentation orale |

---

## 📚 Sources & documentation

- [Wazuh Documentation](https://documentation.wazuh.com/current/installation-guide/)
- [OPNsense Docs](https://docs.opnsense.org/)
- [Docker Install](https://docs.docker.com/engine/install/)
- [Exegol](https://docs.exegol.com/first-install)
- [Nessus Downloads](https://www.tenable.com/downloads/nessus)
- [OpenVPN Community](https://community.openvpn.net/)

---

<div align="center">
  <sub>Hackathon Cybersécurité — 10–27 juin 2025 · Confidentiel</sub>
</div>
