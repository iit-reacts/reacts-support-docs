"use strict";(self.webpackChunk_philips_app_mark_hub_app=self.webpackChunk_philips_app_mark_hub_app||[]).push([[5254],{45254:function(e,t,s){s.r(t),s.d(t,{default:function(){return d},repository:function(){return m},parsedFrontMatter:function(){return k}});var i=s(85504),n=s(90299);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},a.apply(this,arguments)}const o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},r=o("Link"),l=o("Image"),u=o("Toc"),c={},p="wrapper";function d(e){let{components:t,...s}=e;return(0,i.kt)(p,a({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"CONNEXION CHIFFRÉE"),(0,i.kt)("li",{parentName:"ol"},"CHIFFREMENT DES ÉCHANGES PAR VIDÉO, AUDIO ET TEXTE"),(0,i.kt)("li",{parentName:"ol"},"AUTHENTIFICATION À DEUX FACTEURS ET MOT DE PASSE ROBUSTE  "),(0,i.kt)("li",{parentName:"ol"},"SÉCURITÉ DES DONNÉES AU REPOS  "),(0,i.kt)("li",{parentName:"ol"},"HAUTE DISPONIBILITÉ  "),(0,i.kt)("li",{parentName:"ol"},"SAUVEGARDES DE DONNÉES  "),(0,i.kt)("li",{parentName:"ol"},"JOURNAUX D'AUDIT"),(0,i.kt)("li",{parentName:"ol"},"AUDITS INDÉPENDANTS  "),(0,i.kt)("li",{parentName:"ol"},"CARTE DE FLUX DE DONNÉES  "),(0,i.kt)("li",{parentName:"ol"},"AUTHENTIFICATION UNIQUE (SSO)  "),(0,i.kt)("li",{parentName:"ol"},"HÉBERGEMENT")),(0,i.kt)("h2",{id:"1"},(0,i.kt)(r,{to:"#1",copyToClipboard:"true",mdxType:"Link"},"1","."," Connexion Chiffrée")),(0,i.kt)("h3",{id:"condition-de-chiffrement"},(0,i.kt)(r,{to:"#condition-de-chiffrement",copyToClipboard:"true",mdxType:"Link"},"Condition de chiffrement")),(0,i.kt)("p",null,"Tous les points d'accès externes aux API et aux services Reacts nécessitent des connexions sécurisées à l'aide de TLS (Transport Layer Security). Tous les points d'accès internes entre les services Reacts nécessitent des connexions sécurisées\nutilisant des méthodes de chiffrement conformes aux normes de l'industrie."),(0,i.kt)("h2",{id:"2"},(0,i.kt)(r,{to:"#2",copyToClipboard:"true",mdxType:"Link"},"2","."," Chiffrement des échanges vidéo, audio et texte")),(0,i.kt)("p",null,"Les communications audio-vidéo sont établies via WebRTC et utilisent le contexte de sécurité DTLSSRTP pour chiffrer et déchiffrer leurs flux de bout en bout."),(0,i.kt)("p",null,"Les canaux de signalisation sont complètement séparés de ceux du transport des flux audios vidéos et sont sécurisés par TLS. Les empreintes des certificats sont envoyées via cette connexion sécurisée, réduisant ainsi le risque d'attaques de type « MITM » (attaque de l'intermédiaire). Les connexions et les sessions utilisent chacune des clés uniques."),(0,i.kt)("p",null,"Dans les environnements où les connexions de type pair à pair (« P2P ») ne sont pas possibles en raison de restrictions d'infrastructure et de pare-feu, Philips fournit un accès à ses services hébergés TURN. TURN agit à titre de service de relais pour connecter des parties dans des endroits où seules les connexions sortantes sont autorisées.\nDTLS-SRTP permet de sécuriser de bout en bout les sessions protégées, soit sur UDP ou TCP. Compte tenu que le protocole UDP offre de meilleures performances et demande moins de bande passante, il s’agit de l'alternative privilégiée."),(0,i.kt)("p",null,"La messagerie texte est toujours transmise via le service de signalisation et est donc sécurisée avec TLS."),(0,i.kt)("p",null,"L'implémentation par Philips de WebRTC hiérarchise les connexions de flux audio-vidéo de la manière suivante :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"P2P UDP;"),(0,i.kt)("li",{parentName:"ol"},"P2P TCP;"),(0,i.kt)("li",{parentName:"ol"},"TURN UDP;"),(0,i.kt)("li",{parentName:"ol"},"TURN TCP.")),(0,i.kt)("p",null,"Conséquemment, si le pare-feu d’une institution autorise le P2P via UPD et/ou le P2P via TCP, la connexion de flux sera établie en P2P. Si le pare-feu d’une institution bloque les connexions P2P, le flux sera établi via TURN UDP ou TCP avec un chiffrement TLS."),(0,i.kt)("h2",{id:"3"},(0,i.kt)(r,{to:"#3",copyToClipboard:"true",mdxType:"Link"},"3","."," Authentification à deux facteurs et mot de passe robuste")),(0,i.kt)("p",null,"Reacts permet l'utilisation d'une authentification à deux facteurs. La mise en œuvre actuelle utilise les principes de « Quelque chose que vous connaissez » et « Quelque chose que vous possédez »."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Quelque chose que vous connaissez : Nom d'utilisateur et mot de passe. Le mot de passe devrait demeurer confidentiel et être difficile à deviner.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Quelque chose que vous possédez : Philips utilise l'algorithme standard TOTP de « Quelque chose que vous possédez »."))),(0,i.kt)("p",null,"De nombreuses applications gratuites peuvent être utilisées pour calculer un jeton en fonction d'un secret qu'un utilisateur stoke dans son appareil. Le jeton est requis si cet utilisateur configure son compte Reacts pour une authentification à deux facteurs."),(0,i.kt)("p",null,"L'authentification à deux facteurs réduit énormément les chances de succès de nombreux types d'exploitations. Pour ne citer que les types les plus courants, l'ingénierie sociale, la force brute et les attaques par dictionnaire deviennent extrêmement difficiles à réussir lorsque l'authentification à deux facteurs est activée. Dans le cas où une personne malveillante aurait accès à un mot de passe, la « chose que vous savez », il sera très difficile pour cet individu de produire le bon jeton, « la chose que vous possédez ». Dans le cas contraire, si l'utilisateur malveillant accède au dispositif en utilisant « quelque chose que vous possédez », il devra tout de même déterminer le facteur « quelque chose que vous connaissez »."),(0,i.kt)("p",null,"Lors de son inscription, l'utilisateur doit fournir les informations de sécurité suivantes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Une adresse courriel;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Un mot de passe robuste (8 caractères minimum, dont une majuscule, une minuscule et un chiffre);")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lorsque l'utilisateur aura choisi l'authentification à deux facteurs, il devra également enregistrer Reacts dans une application capable de générer les jetons TOTP dans son appareil."))),(0,i.kt)("p",null,"Pour pouvoir accéder à Reacts la première fois, l'utilisateur recevra une clé d'activation par courriel lui permettant de valider la propriété du compte de ce courriel."),(0,i.kt)("h2",{id:"4"},(0,i.kt)(r,{to:"#4",copyToClipboard:"true",mdxType:"Link"},"4","."," Sécurité des données au repos")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les bases de données et ses copies de sauvegarde sont cryptées au repos par « TDE » (Transparent Data Encryption) avec un chiffrement en bloc AES 256."),(0,i.kt)("li",{parentName:"ul"},"Les serveurs utilisés pour le stockage sont situés dans un sous-réseau non exposé à Internet. Seuls les ordinateurs et services Reacts qui le nécessitent ainsi qu'un groupe restreint d'utilisateurs ont accès à ce réseau."),(0,i.kt)("li",{parentName:"ul"},"Les fichiers des utilisateurs qui sont stockés sont cryptés à l'aide d'un chiffrement en mode bloc AES 256."),(0,i.kt)("li",{parentName:"ul"},"L'accès aux informations chiffrées par Philips ou ses fournisseurs est strictement interdit par des politiques de sécurité et d'accès ainsi que par des mécanismes de sécurité en place."),(0,i.kt)("li",{parentName:"ul"},"L’accès aux serveurs de stockage est strictement réglementé par des politiques internes de Philips et des contrats de service")),(0,i.kt)("h2",{id:"5"},(0,i.kt)(r,{to:"#5",copyToClipboard:"true",mdxType:"Link"},"5","."," Haute disponibilité")),(0,i.kt)("p",null,"L'infrastructure de la plateforme Reacts est conçue avec une haute disponibilité et une redondance de service."),(0,i.kt)("h2",{id:"6"},(0,i.kt)(r,{to:"#6",copyToClipboard:"true",mdxType:"Link"},"6","."," SAUVEGARDES DE DONNÉES")),(0,i.kt)("h3",null,(0,i.kt)("strong",{parentName:"h3"},"1-Système de sauvegarde de données")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sauvegarde en ligne active : 0 perte de données - la base de données principale de Philips est activement répliquée sur un serveur secondaire via un cluster de bases de données à haute disponibilité.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sauvegarde passive en ligne: +/- 1 heure de perte de données potentielle - Philips effectue des sauvegardes passives sur le serveur principal de base de données. Ces sauvegardes ne sont pas automatiquement écrasées, ce qui permet à Philips de minimiser les pertes de données en cas de corruption. Les fichiers de sauvegarde de la base de données sont stockés sur un compte de stockage Azure sécurisé et géo-redondant.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Les sauvegardes quotidiennes persistantes sont effectuées sur les disques de toutes les machines virtuelles, ce qui offre une couche de protection supplémentaire. Ils sont stockés dans un coffre-fort Azure Recovery Services conformément aux politiques de rétention de Philips. "))),(0,i.kt)("h4",{id:"-1"},(0,i.kt)("strong",{parentName:"h4"},"2-Chiffrement de sauvegarde")),(0,i.kt)("p",null,"Les données cryptées restent cryptées lors de la sauvegarde et sont soumises aux politiques de sécurité et d'accès à distance de Philips. "),(0,i.kt)("h2",{id:"7"},(0,i.kt)(r,{to:"#7",copyToClipboard:"true",mdxType:"Link"},"7","."," Journaux d'audit")),(0,i.kt)("p",null,"Reacts enregistre les opérations effectuées par les utilisateurs. Ces journaux contiennent les informations suivantes : "),(0,i.kt)("p",null,"• Date et heure pour chaque type d'opération;",(0,i.kt)("br",{parentName:"p"}),"\n","• Type d'opération;",(0,i.kt)("br",{parentName:"p"}),"\n","• Succès de la connexion;",(0,i.kt)("br",{parentName:"p"}),"\n","• Échec de la connexion;",(0,i.kt)("br",{parentName:"p"}),"\n","• Demande de session;",(0,i.kt)("br",{parentName:"p"}),"\n","• Session acceptée;",(0,i.kt)("br",{parentName:"p"}),"\n","• Session annulée;",(0,i.kt)("br",{parentName:"p"}),"\n","• Document partagé;",(0,i.kt)("br",{parentName:"p"}),"\n","• Réinitialisation de mot de passe;",(0,i.kt)("br",{parentName:"p"}),"\n","• Changement de mot de passe;",(0,i.kt)("br",{parentName:"p"}),"\n","• Demandeur (identificateur de l'utilisateur);",(0,i.kt)("br",{parentName:"p"}),"\n","• Message (description du type d'opération);",(0,i.kt)("br",{parentName:"p"}),"\n","• ID de salle (identifiant d'une session entre utilisateurs);",(0,i.kt)("br",{parentName:"p"}),"\n","• Champs supplémentaires (d'autres champs facilitant la lecture de l'entrée du journal)."),(0,i.kt)("p",null,"Les données de journalisation sont disponibles sur demande par le propriétaire du compte."),(0,i.kt)("h2",{id:"8"},(0,i.kt)(r,{to:"#8",copyToClipboard:"true",mdxType:"Link"},"8","."," Audits indépendants")),(0,i.kt)("p",null,"Philips s’engage à respecter ses politiques de sécurité et de confidentialité ainsi que les plus hauts standards de qualité pour sa solution."),(0,i.kt)("p",null,"De plus, Philips s’engage à faire subir un test d'intrusion annuel à sa solution Reacts afin de garantir le maintien de la qualité et de la sécurité de la plateforme Reacts ainsi que du réseau informatique "),(0,i.kt)("h2",{id:"9"},(0,i.kt)(r,{to:"#9",copyToClipboard:"true",mdxType:"Link"},"9","."," Carte de flux de données")),(0,i.kt)("p",null,(0,i.kt)(l,{src:n,alt:"Reacts_flow.png",mdxType:"Image"})),(0,i.kt)("p",null,"Plus de détails sont disponibles sur demande."),(0,i.kt)("h2",{id:"10"},(0,i.kt)(r,{to:"#10",copyToClipboard:"true",mdxType:"Link"},"10","."," Authentification unique (SSO)")),(0,i.kt)("p",null,"L'intégration de partenaire avec SSO peut-être possible sur demande."),(0,i.kt)("h2",{id:"11"},(0,i.kt)(r,{to:"#11",copyToClipboard:"true",mdxType:"Link"},"11","."," Hébergement")),(0,i.kt)("p",null,"Les serveurs de Philips sont hébergés dans une instance localisée des services infonuagiques de Microsoft Azure (Centre du Canada et Est du Canada)."),(0,i.kt)("div",{className:"c-toc"},(0,i.kt)(u,{mdxType:"Toc"},(0,i.kt)("nav",{parentName:"div",className:"c-toc__nav"},(0,i.kt)("ol",{parentName:"nav",className:"c-toc__list c-toc__list-1"},(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#1",mdxType:"Link"},"1. Connexion Chiffrée"),(0,i.kt)("ol",{parentName:"li",className:"c-toc__list c-toc__list-2"},(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h3"},(0,i.kt)(r,{to:"#condition-de-chiffrement",mdxType:"Link"},"Condition de chiffrement")))),(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#2",mdxType:"Link"},"2. Chiffrement des échanges vidéo, audio et texte")),(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#3",mdxType:"Link"},"3. Authentification à deux facteurs et mot de passe robuste")),(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#4",mdxType:"Link"},"4. Sécurité des données au repos")),(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#5",mdxType:"Link"},"5. Haute disponibilité")),(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#6",mdxType:"Link"},"6. SAUVEGARDES DE DONNÉES"),(0,i.kt)("ol",{parentName:"li",className:"c-toc__list c-toc__list-2"},(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h3"}))),(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#7",mdxType:"Link"},"7. Journaux d'audit")),(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#8",mdxType:"Link"},"8. Audits indépendants")),(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#9",mdxType:"Link"},"9. Carte de flux de données")),(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#10",mdxType:"Link"},"10. Authentification unique (SSO)")),(0,i.kt)("li",{parentName:"ol",className:"c-toc__list-item c-toc__list-item-h2"},(0,i.kt)(r,{to:"#11",mdxType:"Link"},"11. Hébergement")))))))}d.isMDXComponent=!0;const m={owner:"philips-internal",project:"HSP_PS_RctSupportDocs",host:"github.com",branch:"main",repositoryFilePath:"docs/fr/security-and-privacy/0-360046168211.mdx\n"},k={parent:"Sécurité et Protection de la vie privée",nav_order:1,id:"360046168211-fr",title:"Vue d'ensemble de la sécurité de Reacts"}},90299:function(e,t,s){e.exports=s.p+"6a81242bad4791a4.png"}}]);