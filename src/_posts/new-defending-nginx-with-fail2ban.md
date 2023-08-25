---
layout: post
title: "Defending nginx against bot attacks with fail2ban"
description: "How to protect the webserver against malicious requests."
category: webtech
---

It was Saturday afternoon, when the email from AWS alerted me that the CPU load on the EC2 instance hosting a large campaign in Switzerland was out of range.

I looked into it and saw an enormous amount of malicious requests hammering at the Nginx web server.

Blocking IP addresses and networks with VPC access control lists, I tried to stop these requests from loading the machine. This was only partly successful since the attacker kept on using VPNs from different countries over all of Europe.
