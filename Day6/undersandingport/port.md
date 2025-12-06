# Network Ports Explained

A **port** in networking allows a single IP address to run multiple services.

**Analogy:**
Think of an **IP address** as an apartment building. Each **port** is like an individual flat in that building. Just like multiple families can live in different flats of the same building, multiple services can run on different ports of the same IP address.

If ports didn’t exist, we could only run **one service per IP address**.

---

## Port Ranges

Ports range from **0 to 65535** (total 65,536 ports) and are categorized as follows:

| Range         | Type                  | Example Use                                       |
| ------------- | --------------------- | ------------------------------------------------- |
| 0 – 1023      | Well-known ports      | HTTP (80), HTTPS (443), FTP (21), SSH (22)        |
| 1024 – 49151  | Registered ports      | User-defined or application-specific services     |
| 49152 – 65535 | Dynamic/Private ports | Temporary connections, client-side communications |

---

## Common Port Numbers

| Service | Port |
| ------- | ---- |
| HTTP    | 80   |
| HTTPS   | 443  |
| FTP     | 21   |
| SSH     | 22   |
| DNS     | 53   |
| SMTP    | 25   |

---

## Example: How Companies Use Ports

A company with a **public IP** might run several services on different ports:

* Port **4000** → Email service
* Port **5000** → Payment processing service

All other unused ports are **blocked by a firewall** for security. This ensures only authorized services can receive requests, reducing the risk of attacks.

**Analogy:** The company “reserves” only certain flats in the apartment for official use and locks the rest.
