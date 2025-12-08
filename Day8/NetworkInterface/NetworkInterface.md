# Network Interfaces & Tethering – Full Notes

## ✅ What Is a Network Interface?

A **network interface** is the hardware or software component that allows a device to connect to a network (internet or local network). It works like the “door” your device uses to enter a network.

---

## 🔌 Types of Network Interfaces

### **1️⃣ Wi-Fi Card (Wireless Interface)**

* Allows devices to connect to Wi-Fi networks.
* Common Linux interface name: `wlan0`

### **2️⃣ Ethernet Port (Wired Interface)**

* Uses a LAN/RJ45 cable for network connection.
* Common Linux interface name: `eth0`

### **3️⃣ Virtual Network Interfaces**

Software-created interfaces used for special purposes:

* **lo** → Loopback (127.0.0.1)
* **docker0** → Docker network for containers
* **tun0** → VPN interface
* **bnep0** → Bluetooth network interface

---

## 🔗 What Is Tethering?

Tethering means **sharing your mobile phone’s internet** with another device. Your phone behaves like a **mini router**.

There are three main types:

---

## 📶 1. Wi-Fi Tethering (Hotspot)

Your phone creates a Wi-Fi network, and other devices connect just like normal Wi-Fi.

### Example

* You turn on **Mobile Hotspot**.
* Your laptop connects to it.

### Interfaces Involved

* Phone hotspot: `wlan0`
* Laptop Wi-Fi interface

---

## 🔵 2. Bluetooth Tethering

Internet is shared through **Bluetooth**.

### Example

1. Pair phone and laptop.
2. Enable **Bluetooth Tethering**.
3. Laptop gets internet via Bluetooth network interface like `bnep0`.

### When Useful?

* Low battery usage
* Secure
* No visible Wi-Fi hotspot

---

## 🔌 3. USB Tethering

Internet shared through a USB cable.

### Example

* Connect phone → laptop via USB.
* Enable **USB Tethering**.
* Laptop instantly gets internet.

### Interfaces Involved

Laptop creates:

* `usb0`
* `enp0s20u1`

### Advantages

* Fastest
* Stable
* Charges phone
* No password required

---

## 🧠 How Tethering Creates a Network Interface

When you enable tethering, your phone:

1. Acts as a **router**
2. Creates a new **interface** (Wi-Fi/USB/Bluetooth)
3. Assigns IPs using **DHCP**
4. Uses **NAT** to forward mobile data to your device

### Example: USB Tethering (Laptop Sees)

```
Interface: enp0s20u1
IP Address: 192.168.42.100
Gateway: 192.168.42.129
```

---

## 📝 Comparison Table

| Feature             | Wi-Fi Tethering | Bluetooth Tethering | USB Tethering |
| ------------------- | --------------- | ------------------- | ------------- |
| **Speed**           | Fast            | Slow                | Fastest       |
| **Battery Usage**   | High            | Low                 | Very Low      |
| **Security**        | Medium          | High                | High          |
| **Cable Required?** | ❌ No            | ❌ No                | ✔ Yes         |
