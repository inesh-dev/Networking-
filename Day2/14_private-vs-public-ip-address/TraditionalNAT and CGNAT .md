# NAT (Network Address Translation) Explained

Network Address Translation (NAT) is a method used to map private IP addresses in a local network to public IP addresses for communication over the internet.

---

## 1. Traditional NAT (Static/Dynamic NAT)

**Definition:**  
Traditional NAT is used by a home or small office router to allow devices with **private IP addresses** to access the internet using a **single public IP**.

**How it works:**  
- Devices in the LAN have private IPs (e.g., `192.168.1.x`).  
- The router replaces the **source IP** of outgoing packets with its **public IP**.  
- When responses come back, the router translates the public IP back to the private IP of the requesting device.  

**Example:**

| Device | Private IP  | Destination (Internet) | Translated Source IP |
|--------|------------|----------------------|--------------------|
| PC1    | 192.168.1.2 | google.com           | 203.0.113.5        |
| PC2    | 192.168.1.3 | example.com          | 203.0.113.5        |

Here, both PCs share a **single public IP (203.0.113.5)** to access the internet.

**Use Case:**  
- Home routers  
- Small offices  
- Any network where the ISP provides a single public IP

---

## 2. Carrier-Grade NAT (CGNAT)

**Definition:**  
Carrier-Grade NAT (CGNAT) is used by ISPs to conserve public IPv4 addresses. It allows **many customers** to share a **single public IP**.  

**How it works:**  
- Customers have private IPs provided by the ISP (e.g., `100.64.0.x`).  
- The ISP uses NAT at their side to map many private IPs to a smaller pool of public IPs.  
- Port numbers are used to distinguish between multiple users sharing the same public IP.  

**Example:**

| Customer Device | Customer Private IP | ISP Public IP | NAT Port Mapping |
|-----------------|------------------|---------------|----------------|
| Customer1 PC    | 100.64.1.2       | 198.51.100.5  | 50000-50010    |
| Customer2 PC    | 100.64.2.3       | 198.51.100.5  | 50011-50020    |

**Key Points:**  
- Multiple users share the **same public IP**.  
- CGNAT can cause issues for services that require **port forwarding**, such as online gaming, VPNs, or hosting servers.  

**Use Case:**  
- ISPs running out of IPv4 addresses  
- Large-scale mobile and broadband networks  

---

### Summary Table

| Feature             | Traditional NAT          | Carrier-Grade NAT (CGNAT) |
|--------------------|-------------------------|---------------------------|
| Scope               | Small LAN               | ISP-level, multiple users |
| Public IP Usage     | One per LAN             | Shared among many users   |
| Private IP Range    | 192.168.x.x, 10.x.x.x   | 100.64.0.0/10             |
| Port Translation    | Optional                | Mandatory for multiple users |
| Use Case            | Home/Office networks    | ISPs & mobile providers   |

---

**References:**  
1. [RFC 1918 – Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918)  
2. [RFC 6598 – Shared Address Space for CGNAT](https://www.rfc-editor.org/rfc/rfc6598)
