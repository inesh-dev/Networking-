# Introduction to IP Address and Subnet Mask

An **IP address** is a 32-bit address used to uniquely identify a device connected over a network.

Example of an IP address:

```
192.168.1.1
```

* **Minimum IP address:** `0.0.0.0`
* **Maximum IP address:** `255.255.255.255`

---

Generally, IP addresses are mentioned in this format on most local computers:

```
192.168.1.1/24
```

* The `/24` represents the **subnet mask**, which tells that the **first 24 bits are network bits** and the remaining bits are **host bits**.
* This `/24` notation is called **CIDR notation**.

---

### Number of Devices in a /24 Network

For a `/24` subnet mask, the number of devices that can be connected to the network is calculated as:

```
Number of devices = 256 - 2 = 254
```

> Note: The two IP addresses `192.168.0.0` and `192.168.0.255` are reserved.

---

### IPv4 Limitations

IPv4 addresses may not be sufficient for future use due to the limited number of addresses.

* The range `127.0.0.0` to `127.255.255.255` is reserved as **loopback addresses**.
* Example: `127.0.0.1` is commonly used as **localhost**.
