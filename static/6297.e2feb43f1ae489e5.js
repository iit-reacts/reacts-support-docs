"use strict";(self.webpackChunk_philips_app_mark_hub_app=self.webpackChunk_philips_app_mark_hub_app||[]).push([[6297],{96297:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p,repository:()=>u,parsedFrontMatter:()=>d});var a=i(85504);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},n.apply(this,arguments)}const o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=o("Link"),r=o("Toc"),l={},c="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(c,n({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1"},(0,a.kt)(s,{to:"#1",copyToClipboard:"true",mdxType:"Link"},"1","."," Connection Encryption")),(0,a.kt)("h3",{id:"encryption-requirements"},(0,a.kt)(s,{to:"#encryption-requirements",copyToClipboard:"true",mdxType:"Link"},"Encryption Requirements")),(0,a.kt)("p",null,"All external access points to the Reacts APIs and services require secure connections using Transport Layer Security (TLS 1.2). All internal access points between Reacts services require secure connections using industry standards encryption methods."),(0,a.kt)("h2",{id:"2"},(0,a.kt)(s,{to:"#2",copyToClipboard:"true",mdxType:"Link"},"2","."," Video, voice and text exchange encryption")),(0,a.kt)("p",null,"Audio/video communications are established via WebRTC and utilize the DTLS-SRTP security context to encrypt and decrypt streams from end to end."),(0,a.kt)("p",null,"The signaling channels are completely separated from the media transport and are TLS secured. The certificate fingerprints are sent through this secure connection, reducing the possibility of MITM attacks. Every connection and session use unique keys."),(0,a.kt)("p",null,'For environments where Peer to Peer ("P2P") connections are not possible due to infrastructure and firewall restrictions, Philips provides access to its hosted TURN services. TURN acts as a relay service to connect parties together in places where only outbound connections are allowed. The DTLS-SRTP allows secure end to end protected sessions over either UDP or TCP. Given that UDP provides higher performance and lower bandwidth requirements, it is the preferred alternative.'),(0,a.kt)("p",null,"Text messaging is always transmitted via the signaling service and is thus secured with TLS."),(0,a.kt)("p",null,"Philips' implementation of WebRTC prioritizes audio/video stream connections as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"P2P UDP;"),(0,a.kt)("li",{parentName:"ol"},"P2P TCP;"),(0,a.kt)("li",{parentName:"ol"},"TURN UDP;"),(0,a.kt)("li",{parentName:"ol"},"TURN TCP.")),(0,a.kt)("p",null,"Therefore, if an institution’s firewall allows P2P via UPD and/or P2P via TCP, the stream connection will be established in P2P. If an institution’s firewall blocks P2P connections, the stream will be established via TURN UDP or TCP with TLS encryption."),(0,a.kt)("h2",{id:"3"},(0,a.kt)(s,{to:"#3",copyToClipboard:"true",mdxType:"Link"},"3","."," Two-factor authentication and robust password")),(0,a.kt)("p",null,'Reacts allows the use of two-factor authentication. The current implementation uses the principles of "Something you know" and "Something you have".'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Something you know: Username and password. The password is expected to remain confidential and hard to guess.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Something you have: Philips uses a TOTP standard algorithm implementation of "Something you have".'))),(0,a.kt)("p",null,"There are many free applications that can be used to calculate a token based on a secret the user stores in his/her device. The token is required if the user configures his/her Reacts account for two-factor authentication."),(0,a.kt)("p",null,'The two-factor authentication reduces enormously the chances of success of many types of exploits. Just to mention the most common ones, social engineering, brute force and dictionary attacks become extremely hard to succeed when a two-factor authentication is enabled. In the case a malicious individual gets access to a password, the "thing you know", it will be very difficult for such person to produce the right token, "something you have". In the contrary case, if the malicious user gets access to the device using "something you have", it will still be needed to figure out the "something you know" factor.'),(0,a.kt)("p",null,"Upon registration, the user must provide the following security information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An email address;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A robust password (8 characters minimum, including one upper-case, one lower-case and one number);"))),(0,a.kt)("p",null,"When a user will have chosen the two-factor authentication, it will also be needed to register Reacts in an application that can generate the TOTP tokens his/her device."),(0,a.kt)("h2",{id:"4"},(0,a.kt)(s,{to:"#4",copyToClipboard:"true",mdxType:"Link"},"4","."," Data at rest security")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The database and database backups are encrypted at rest using "Transparent Data Encryption" (TDE) with AES 256.'),(0,a.kt)("li",{parentName:"ul"},"The servers used for storage are located in a sub-network that is not exposed to the internet. Only the computers and the Reacts services that require it as well as a restricted group of users have access to this network."),(0,a.kt)("li",{parentName:"ul"},"The stored user files are encrypted using AES 256."),(0,a.kt)("li",{parentName:"ul"},"Access to encrypted information by Philips or Philips suppliers is strictly prohibited by security and access policies as well as by implemented security mechanisms"),(0,a.kt)("li",{parentName:"ul"},"Access to the storage servers is strictly regulated by Philips’s internal policies and service agreements.")),(0,a.kt)("h2",{id:"5"},(0,a.kt)(s,{to:"#5",copyToClipboard:"true",mdxType:"Link"},"5","."," High availability (HA)")),(0,a.kt)("p",null,"The Reacts platform infrastructure is designed with high availability (HA) and Service Redundancy."),(0,a.kt)("h2",{id:"6"},(0,a.kt)(s,{to:"#6",copyToClipboard:"true",mdxType:"Link"},"6","."," Data backups")),(0,a.kt)("h3",{id:"1-level-data-backup-system"},(0,a.kt)(s,{to:"#1-level-data-backup-system",copyToClipboard:"true",mdxType:"Link"},"1-Level Data Backup System")),(0,a.kt)("p",null,"1","."," Active online backup: 0 data loss - Philips' primary database is actively replicated to a secondary server via a high-availability database cluster."),(0,a.kt)("p",null,"2","."," Passive online backup: +/- 1 hour of potential data loss - Reacts Service performs passive backups on the primary database server. The database backup files are stored in AWS Backup. "),(0,a.kt)("p",null,"3","."," Persistent daily backups are performed on all virtual machine disks, and provide an extra layer of protection. They are stored to AWS Backup following Philips' retention policies."),(0,a.kt)("h4",null,(0,a.kt)("strong",{parentName:"h4"},"2-Backup Encryption")),(0,a.kt)("p",null,"Encrypted data remains encrypted when backed up and is subject to Philips' security and remote"),(0,a.kt)("p",null,"access policies."),(0,a.kt)("h2",{id:"7"},(0,a.kt)(s,{to:"#7",copyToClipboard:"true",mdxType:"Link"},"7","."," Audit logs")),(0,a.kt)("p",null,"Reacts logs operations performed by users. These logs contain the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Date and time for each type of operation;  "),(0,a.kt)("li",{parentName:"ul"},"Type of operation;  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Connection success;  "),(0,a.kt)("li",{parentName:"ul"},"Connection failure;  "),(0,a.kt)("li",{parentName:"ul"},"Session request;  "),(0,a.kt)("li",{parentName:"ul"},"Session accepted;  "),(0,a.kt)("li",{parentName:"ul"},"Session aborted;  "),(0,a.kt)("li",{parentName:"ul"},"Document shared;  "),(0,a.kt)("li",{parentName:"ul"},"Password reset;  "),(0,a.kt)("li",{parentName:"ul"},"Password changed;  "))),(0,a.kt)("li",{parentName:"ul"},"Requester (user identifier);  "),(0,a.kt)("li",{parentName:"ul"},"Message (description of operation type);  "),(0,a.kt)("li",{parentName:"ul"},"Room ID (identifier of a session between users);  "),(0,a.kt)("li",{parentName:"ul"},"Additional fields (other fields helping to read the log entry).")),(0,a.kt)("p",null,"Log data is available upon client request. The client must provide Philips with a list of its users; Philips will then provide the logs for those users in a .csv format. "),(0,a.kt)("h2",{id:"8"},(0,a.kt)(s,{to:"#8",copyToClipboard:"true",mdxType:"Link"},"8","."," Independent audits")),(0,a.kt)("p",null,"Philips is dedicated to upholding its security and confidentiality policies as well as the higher standards of quality for its solution."),(0,a.kt)("p",null,"In addition, Philips is committed to undergoing an annual IT pentesting of its Reacts solution in order to ensure that the quality and security of the Reacts platform as well as the IT network are maintained."),(0,a.kt)("h2",{id:"9"},(0,a.kt)(s,{to:"#9",copyToClipboard:"true",mdxType:"Link"},"9","."," Data flow map")),(0,a.kt)("p",null,"![2023_Collaboration Live network_PeerToPeer.jpeg]","(@assets/attachments/2023_Collaboration Live network_PeerToPeer.jpeg)"),(0,a.kt)("p",null,"More details are available upon request."),(0,a.kt)("h2",{id:"10"},(0,a.kt)(s,{to:"#10",copyToClipboard:"true",mdxType:"Link"},"10","."," Single sign-on (SSO)")),(0,a.kt)("p",null,"Partner integration with SSO can be possible upon request."),(0,a.kt)("h2",{id:"11"},(0,a.kt)(s,{to:"#11",copyToClipboard:"true",mdxType:"Link"},"11","."," Hosting")),(0,a.kt)("p",null,"Reacts Philips' servers are hosted in a localized instance of AWS cloud Services in Ireland (eu-west-1)."),(0,a.kt)("div",{className:"c-toc"},(0,a.kt)(r,{mdxType:"Toc"},(0,a.kt)("nav",{parentName:"div",className:"c-toc__nav"},(0,a.kt)("ol",{parentName:"nav",className:"c-toc__list c-toc__list-1"},(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#1",mdxType:"Link"},"1. Connection Encryption"),(0,a.kt)("ol",{parentName:"li",className:"c-toc__list c-toc__list-2"},(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h3"},(0,a.kt)(s,{to:"#encryption-requirements",mdxType:"Link"},"Encryption Requirements")))),(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#2",mdxType:"Link"},"2. Video, voice and text exchange encryption")),(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#3",mdxType:"Link"},"3. Two-factor authentication and robust password")),(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#4",mdxType:"Link"},"4. Data at rest security")),(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#5",mdxType:"Link"},"5. High availability (HA)")),(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#6",mdxType:"Link"},"6. Data backups"),(0,a.kt)("ol",{parentName:"li",className:"c-toc__list c-toc__list-2"},(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h3"},(0,a.kt)(s,{to:"#1-level-data-backup-system",mdxType:"Link"},"1-Level Data Backup System")))),(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#7",mdxType:"Link"},"7. Audit logs")),(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#8",mdxType:"Link"},"8. Independent audits")),(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#9",mdxType:"Link"},"9. Data flow map")),(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#10",mdxType:"Link"},"10. Single sign-on (SSO)")),(0,a.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,a.kt)(s,{to:"#11",mdxType:"Link"},"11. Hosting")))))))}p.isMDXComponent=!0;const u={owner:"philips-internal",project:"HSP_PS_RctSupportDocs",host:"github.com",branch:"main",repositoryFilePath:"docs/en/security-and-privacy/0-360046168211.mdx\n"},d={parent:"Security and Privacy",nav_order:1,id:"360046168211-en",title:"Reacts Security Overview"}}}]);