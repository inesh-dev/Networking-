# TCP/IP Model (Refactored and Corrected)

The **TCP/IP model** is a simplified and more practical version of the
OSI model. It contains **four layers**, compared to OSI's seven:

1.  **Application Layer**
2.  **Transport Layer**
3.  **Internet (Network) Layer**
4.  **Network Access Layer**

------------------------------------------------------------------------

## 1. Application Layer

In TCP/IP, the OSI **Application**, **Presentation**, and **Session**
layers are merged into a **single** Application Layer.

### Responsibilities

-   Provides network services to user applications
-   Handles protocols like **HTTP, HTTPS, DNS, FTP, SMTP, SSH**
-   Data format translation and encryption occur here (even though OSI
    separates it)

------------------------------------------------------------------------

## 2. Transport Layer

Responsible for end‑to‑end communication between processes.

### What happens here?

-   Data is divided into units
    -   **TCP → Segments**
    -   **UDP → Datagrams**
-   Port numbers are added
-   Ensures correct delivery (TCP provides reliability, UDP does not)

### Example Protocols

-   TCP (reliable)
-   UDP (fast, no reliability)

------------------------------------------------------------------------

## 3. Internet (Network) Layer

This layer manages logical addressing and routing.

### What happens here?

-   Segments/Datagrams are encapsulated into **Packets**
-   **Source and Destination IP** are added
-   Routers use IP addresses to route packets across different networks

### Example Protocol

-   **IP (Internet Protocol)**

------------------------------------------------------------------------

## 4. Network Access Layer

This layer handles how data is physically sent over the network.

### What happens here?

-   Packets are divided into **Frames**
-   **Source and Destination MAC addresses** are added
-   Error detection bits are included (e.g., CRC)
-   Frames are converted into raw bits (0s and 1s) for transmission over
    cables or wireless

### Example Technologies

-   Ethernet
-   WiFi
-   ARP (used to find MAC addresses)

------------------------------------------------------------------------

# Advantages of TCP/IP Model

### ✅ **1. Highly Practical**

Used in real networking and the entire Internet.

### ✅ **2. Supports Scalable and Heterogeneous Networks**

Works across different types of devices and technologies.

### ✅ **3. Reliable Communication**

TCP ensures error recovery and proper data ordering.

### ✅ **4. Flexible and Extensible**

New protocols can be added (e.g., HTTP/2, QUIC).

### Example

The entire **Internet** is built using TCP/IP.

------------------------------------------------------------------------

# Disadvantages of TCP/IP Model

### ❌ **1. Not Very Strictly Layered**

Some functions overlap between layers.

### ❌ **2. Too Simple Compared to OSI**

OSI explains concepts more clearly; TCP/IP does not separate
presentation/session responsibilities.

### ❌ **3. Limited Scope for Data Flow Explanation**

It does not precisely define: - What each layer must do - How encryption
or formatting occurs (handled vaguely in application layer)

### Example

Application layer includes too many responsibilities (encryption,
formatting, sessions).

------------------------------------------------------------------------

# Summary Table

  ------------------------------------------------------------------------
  OSI Layer                     TCP/IP Layer             Data Unit
  ----------------------------- ------------------------ -----------------
  Application                   Application              Data

  Presentation                  Application              ---

  Session                       Application              ---

  Transport                     Transport                Segment /
                                                         Datagram

  Network                       Internet                 Packet

  Data Link + Physical          Network Access           Frame / Bits
  ------------------------------------------------------------------------

------------------------------------------------------------------------

# End of Document
