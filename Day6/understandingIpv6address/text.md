# IPv6 Address

IPv6 is a 128-bit IP address designed to overcome the scarcity of IPv4 addresses. It consists of 8 groups, each containing four hexadecimal digits.

## Format

IPv6 addresses are written in the form:

```
group1:group2:group3:...:group8
```

### Example:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

This can be compressed to:

```
2001:db8:85a3::8a2e:370:7334
```

### Compression Rules

* Leading zeros in each group can be omitted.

  ```
  0000 -> 0
  ```
* One or more consecutive groups of zeros can be replaced with `::` (but only once per address).

  ```
  baaa:0000:caaa:.... -> baaa::caaa
  ```

### Special Addresses

* All zeros:

  ```
  0000:0000:0000:0000:0000:0000:0000:0000 -> ::
  ```
* Loopback/localhost:

  ```
  0000:0000:0000:0000:0000:0000:0000:0001 -> ::1
  ```

## Structure

* The first 64 bits are used as the **network address**.
* The last 64 bits are used as the **host address**.

### Network Address Breakdown

* The first 48 bits of the network address are used for the **global routing prefix**.
* The remaining 16 bits of the network address are used for the **subnet ID**.

## Summary

IPv6 allows for a vastly larger address space compared to IPv4 and includes mechanisms to simplify and compress long addresses for readability.The ip address used is the public address so it can be accessed anywhere from the internet so if the router doesnot have the firewall protection than it will be unsafe
