# MAC Address – Detailed Notes

## ✅ What is a MAC Address?

* MAC (Media Access Control) address is a **unique hardware identifier** for a network interface.
* Used to identify devices on a local network.
* Length: **48 bits**, written in hexadecimal.

### Structure

* First 24 bits → OUI (Organizationally Unique Identifier) → identifies manufacturer
* Last 24 bits → unique number assigned to the device

### Example

```
MAC: 88:9F:12:44:55:66
OUI: 88:9F:12 → Intel
Device ID: 44:55:66 → Unique for this device
```

## ✅ Role of MAC in Networking

* Router uses MAC to assign **IP addresses** via DHCP.
* Each network interface gets a unique IP based on its MAC.

### DHCP Example

| MAC Address       | Assigned IP  | Device |
| ----------------- | ------------ | ------ |
| A4:B1:C2:9D:6F:22 | 192.168.1.66 | Laptop |
| 88:FF:2A:4C:1B:90 | 192.168.1.67 | Phone  |

## ⚠️ MAC Conflicts

* Two devices with the same MAC on the same network cause **network conflicts**.
* Symptoms: packet loss, disconnections, router confusion.

## ✅ Key Points

* MAC is globally unique, assigned by manufacturers.
* Router assigns IP based on MAC.
* Conflicting MACs cause network instability.
* MAC is essential for local addressing, while IP handles routing.
