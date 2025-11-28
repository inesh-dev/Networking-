# 📘 Port Forwarding — Notes

## ✅ What is Port Forwarding?
Port Forwarding is a networking feature that allows external devices on the internet to access services running on a private network (your local devices).  
It works by mapping a **public IP + port** to a **private IP + port** inside your LAN.

---

## 🔍 Why Do We Need Port Forwarding?
- Hosting a game server from home  
- Accessing CCTV or home server remotely  
- Running a web server on your PC  
- Remote desktop access  
- IoT device access (e.g., home automation)

---

## 🧠 How It Works (Simple Explanation)
Your router has:
- **One Public IP** → visible to the internet  
- **Many Private IPs** → visible only inside your LAN  

When an external request comes to your router (ex: PublicIP:8080), port forwarding tells the router:

> “Send this traffic to device 192.168.1.10 on port 8080.”

---

## 📌 Example
Suppose you run a web server on your PC:  
- PC IP: `192.168.1.100`  
- Local port: `3000`  
- You want to access it from outside via port `8080`  

Port Forwarding rule:

| Public Port | Private IP        | Private Port | Protocol |
|-------------|-------------------|--------------|----------|
| 8080        | 192.168.1.100     | 3000         | TCP      |

Now anyone can access:  

