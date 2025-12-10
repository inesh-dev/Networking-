# TCP vs UDP Explained

## **TCP (Transmission Control Protocol)**

TCP is a **connection-oriented protocol**, which means a connection is
established before sending data. It uses a **three-way handshake** to
start communication.

### **Key Features of TCP**

-   **Connection-oriented** (requires the 3-way handshake)
-   **Reliable** data transfer
-   **Data is delivered in order**
-   **Retransmits lost packets**
-   **Slower but reliable**

### **Example:**

-   **Web browsing (HTTP/HTTPS)** -- Your browser needs all data
    correctly.
-   **File transfers (FTP)** -- You cannot afford missing or corrupted
    data.

------------------------------------------------------------------------

## **UDP (User Datagram Protocol)**

UDP is a **connectionless protocol**, meaning data is sent without
establishing a connection. No handshake is required.

### **Key Features of UDP**

-   **Connectionless** (no handshake)
-   **Unreliable** (no guarantee of delivery)
-   **No ordering of packets**
-   **Faster but less reliable**
-   Used when **speed is more important than reliability**

### **Example:**

-   **Online gaming** -- A small data lag is better than delay.
-   **Live streaming / video calls** -- Dropped frames are okay.

------------------------------------------------------------------------

## **Major Differences Between TCP & UDP**

  Feature        TCP                         UDP
  -------------- --------------------------- -------------------------
  Type           Connection-oriented         Connectionless
  Reliability    Reliable                    Unreliable
  Packet Order   Ordered                     Not ordered
  Speed          Slower                      Faster
  Handshake      Yes (3-way)                 No
  Use Cases      Web, Email, File Transfer   Streaming, Gaming, VoIP

------------------------------------------------------------------------

## **Simple Real-Life Analogy**

-   **TCP = Sending a registered parcel**\
    You confirm delivery, track it, and ensure it arrives safely.

-   **UDP = Throwing a message over the fence**\
    You throw it quickly---no guarantee it lands properly, but it's
    fast.
