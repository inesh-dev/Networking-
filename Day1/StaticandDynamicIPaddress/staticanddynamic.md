# IP Address Notes (Static, Dynamic, Public, Private)

## What is an IP Address?
An IP address is a unique number used to identify a device in a network.  
Example: 192.168.1.5, 8.8.8.8

---

# 1. Static and Dynamic IP Address

## Static IP Address
A **static IP address** does not change automatically.  
It is manually assigned by the user or the network administrator.

### When Static IPs Are Used:
- Web servers  
- Email servers  
- VPN servers  
- CCTV and remote access devices  

### Advantages:
- Stable and reliable  
- Easy remote access  
- Good for hosting websites  
- Easier to configure firewalls  

### Disadvantages:
- More expensive  
- Limited availability  
- Can be targeted (same IP always exposed)  
- Must be configured manually  

---

## Dynamic IP Address
A **dynamic IP address** changes from time to time.  
It is automatically assigned by a **DHCP server**.

### Where Dynamic IPs Are Used:
- Home networks  
- Mobile phones  
- Guest devices  
- Normal browsing  

### Advantages:
- Cheaper  
- More secure (changes frequently)  
- No configuration needed  

### Disadvantages:
- Not good for servers  
- Remote access becomes harder  
- May cause connection interruptions when IP changes  

---

## Difference Between Static and Dynamic IP

| Static IP | Dynamic IP |
|-----------|------------|
| Assigned manually | Assigned automatically by DHCP |
| Does not change | Changes periodically |
| Used in servers | Used in home devices |
| More expensive | Lower cost |
| Easier for remote access | Harder for remote access |
| Less secure | More secure |

---

# 2. Public and Private IP Address

## Public IP Address
A **public IP** is assigned by the ISP and is globally unique.  
Your router receives this IP to communicate with the internet.

### Examples:
- 49.244.53.112  
- 8.8.8.8  
- 142.250.190.78  

### Used For:
- Internet access  
- Hosting websites  
- Online servers and services  

---

## Private IP Address
A **private IP** is used inside a local network (LAN).  
It is assigned by the router’s DHCP and can repeat in other networks.

### Private IP Ranges:
- 10.0.0.0 – 10.255.255.255  
- 172.16.0.0 – 172.31.255.255  
- 192.168.0.0 – 192.168.255.255  

### Examples:
- 192.168.1.1  
- 192.168.1.45  
- 10.0.0.12  

### Used For:
- Home devices (phone, laptop, TV)  
- Local sharing  
- Printers, routers, CCTV  

---

## Difference Between Public & Private IP

| Public IP | Private IP |
|-----------|-------------|
| Assigned by ISP | Assigned by router/DHCP |
| Globally unique | Repeats in every network |
| Used on the internet | Used inside a LAN |
| Accessible from internet | Not accessible from outside |
| Example: 49.244.53.112 | Example: 192.168.1.45 |

---

# Simple Example of a Home Network

- **Router Public IP:** 49.244.53.112  
- **Internal Devices (Private IPs):**  
  - Laptop → 192.168.1.20  
  - Phone → 192.168.1.21  
  - TV → 192.168.1.22  

All these devices share **one public IP** when accessing the internet.

