# OSI Model Layers Explained

## 1. Application Layer

In the Application Layer, the user's applications use protocols such as **HTTP/HTTPS, SMTP, and DNS** to communicate over the network. The interaction with data happens here, but the browser or email client itself is not the application layer—they simply use the services provided by this layer.

## 2. Presentation Layer

The Presentation Layer is like a **translator and protector**: it formats and encrypts data going down, and decrypts and translates data coming up. Its "client" above is always the Application Layer, and its "client" below is always the Session Layer.

## 3. Session Layer

The Session Layer is responsible for **establishing, managing, and terminating a session** between two devices. A session is a logical connection that remains active while data is being transferred and is closed immediately once the transfer is complete. It also provides **checkpoints** during data transfer to ensure reliability. For example, if 100 MB of data is being sent and a network issue occurs after 50 MB, the session can resume from the last checkpoint instead of starting over. This layer ensures synchronization between devices and helps maintain a reliable and organized data transfer.

## 4. Transport Layer

The Transport Layer provides **end-to-end communication**, divides data into **segments**, ensures they are delivered correctly, and sends them to the Network Layer. It also **assigns ports** to the segments, e.g., TCP or UDP.
segment is called in the TCP/IP model while datagram is used in the UDP protocol

## 5. Network Layer (if the devices are on two different networks)

The Network Layer at the sending end takes the segments from the Transport Layer, encapsulates them into **packets**, and **routes these packets** across the network toward the destination device. It handles addressing (like IP addresses) and determines the best path for delivery, but it does **not guarantee reliable delivery**. Source and destination addresses are added to the packet along with port information.

## 6. Data Link Layer

At this layer, the **MAC address** is added and the data is called a **frame**. The Data Link Layer is responsible for **error checking** and reliable delivery of frames within the same network.

## 7. Physical Layer

The Physical Layer is the **actual physical link** between two devices. It is responsible for transferring **raw bits (0s and 1s)** over the network medium, such as cables, fiber optics, or wireless signals.


Note:After the Transport layer, data is NOT split again — but it is wrapped by other headers.
